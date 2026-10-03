import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import handleProjectRequest, { isResendConfigured } from './api/project-request.ts';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security: Limit request body size
app.use(express.json({ limit: '15kb' }));

// Status endpoint for diagnostic check
const handleStatusCheck = (_req: Request, res: Response) => {
  const configured = isResendConfigured();
  res.json({
    status: 'ok',
    configured,
    provider: 'resend',
    sender: process.env.SMTP_FROM || 'PRIRAJ GROUP <hello@prirajgroup.com>',
    businessEmail: process.env.BUSINESS_EMAIL || 'prirajgroup@gmail.com',
    requiredEnvVars: configured ? [] : ['RESEND_API_KEY']
  });
};

app.get('/api/project-request/status', handleStatusCheck);
app.get('/api/inquiry/status', handleStatusCheck);

// Unified Project Request API Handler (Vercel & Express compatible)
app.all('/api/project-request', (req: Request, res: Response) => handleProjectRequest(req, res));
app.all('/api/inquiry', (req: Request, res: Response) => handleProjectRequest(req, res));

// Vite Middleware for development vs Static serving for production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`[PRIRAJ GROUP] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
