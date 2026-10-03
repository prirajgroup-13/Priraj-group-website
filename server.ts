import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { Resend } from 'resend';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security: Limit request body size
app.use(express.json({ limit: '15kb' }));

// In-memory rate limiting map: IP -> timestamp array
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Helper: Escape HTML to prevent XSS in email clients
const escapeHtml = (unsafe: string): string => {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Helper: Sanitize text inputs
const sanitizeString = (str: unknown, maxLen = 500): string => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags
    .trim()
    .slice(0, maxLen);
};

// Rate limiter middleware
const rateLimiter = (req: Request, res: Response, next: () => void) => {
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const timestamps = rateLimitMap.get(clientIp) || [];

  // Filter out timestamps outside window
  const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a few minutes before submitting another inquiry.'
    });
  }

  recentTimestamps.push(now);
  rateLimitMap.set(clientIp, recentTimestamps);
  next();
};

// Check if Resend is configured
const isResendConfigured = (): boolean => {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim() !== '');
};

// Status endpoint for diagnostic check
const handleStatusCheck = (_req: Request, res: Response) => {
  const configured = isResendConfigured();
  res.json({
    status: 'ok',
    configured,
    provider: 'resend',
    sender: process.env.SMTP_FROM || process.env.RESEND_FROM || 'PRIRAJ GROUP <hello@prirajgroup.com>',
    businessEmail: process.env.BUSINESS_EMAIL || 'prirajgroup@gmail.com',
    requiredEnvVars: configured ? [] : ['RESEND_API_KEY']
  });
};

app.get('/api/project-request/status', handleStatusCheck);
app.get('/api/inquiry/status', handleStatusCheck);

// Core Project Request Handler (Resend Integration)
const handleProjectRequest = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      description,
      _hp_company_url // Honeypot field for bot detection
    } = req.body;

    // Honeypot check: Bots fill hidden fields
    if (_hp_company_url) {
      // Silently accept bot submissions without dispatching
      return res.status(200).json({ success: true, message: 'Request processed.' });
    }

    // Required fields validation & sanitization
    const sanitizedName = sanitizeString(name, 100);
    const sanitizedEmail = sanitizeString(email, 120);
    const sanitizedService = sanitizeString(service, 100);
    const sanitizedBudget = sanitizeString(budget, 100);
    const sanitizedDescription = sanitizeString(description, 3000);
    const sanitizedPhone = sanitizeString(phone, 30);
    const sanitizedCompany = sanitizeString(company, 100);
    const sanitizedTimeline = sanitizeString(timeline, 100);

    if (!sanitizedName || sanitizedName.length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Full Name is required (minimum 2 characters).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!sanitizedEmail || !emailRegex.test(sanitizedEmail)) {
      return res.status(400).json({
        success: false,
        error: 'A valid email address is required.'
      });
    }

    if (!sanitizedService) {
      return res.status(400).json({
        success: false,
        error: 'Please select a service.'
      });
    }

    if (!sanitizedDescription || sanitizedDescription.length < 8) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a project description (minimum 8 characters).'
      });
    }

    const recipientEmail = process.env.BUSINESS_EMAIL || 'prirajgroup@gmail.com';
    const senderFrom = process.env.SMTP_FROM || process.env.RESEND_FROM || 'PRIRAJ GROUP <hello@prirajgroup.com>';
    const emailSubject = `New Project Inquiry — ${sanitizedService} — PRIRAJ GROUP`;

    const submissionDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    // Plain text email fallback
    const emailPlainText = `PRIRAJ GROUP
New Project Inquiry

Client Information

Full Name:
${sanitizedName}

Email:
${sanitizedEmail}

Phone:
${sanitizedPhone || 'Not provided'}

Company / Brand:
${sanitizedCompany || 'Not provided'}

Requested Service:
${sanitizedService}

Budget:
${sanitizedBudget || 'Not specified'}

Timeline:
${sanitizedTimeline || 'Not specified'}

Project Description:
${sanitizedDescription}

Submission Date & Time:
${submissionDate} (IST)

SOURCE:
PRIRAJ GROUP Website
Dispatched directly to ${recipientEmail}`;

    // Clean, professional HTML email with PRIRAJ GROUP dark & gold theme
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(emailSubject)}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050508; color: #ededed; margin: 0; padding: 24px; }
    .container { max-width: 620px; margin: 0 auto; background-color: #0d0d12; border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.8); }
    .header { background: linear-gradient(180deg, #171722 0%, #0d0d12 100%); padding: 32px 32px 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
    .gold-badge { display: inline-block; color: #d4af37; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; }
    .title { color: #ffffff; font-size: 24px; font-weight: 700; margin: 0 0 6px 0; }
    .subtitle { color: #9494a8; font-size: 13px; margin: 0; }
    .content { padding: 32px; }
    .section-heading { color: #d4af37; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 16px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 8px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table td { padding: 8px 0; vertical-align: top; }
    .info-label { width: 150px; color: #848496; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
    .info-value { color: #ffffff; font-size: 14px; font-weight: 500; }
    .info-value a { color: #d4af37; text-decoration: none; }
    .description-card { background-color: #14141d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 16px 20px; margin: 12px 0 24px 0; color: #ededed; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
    .reply-cta { display: inline-block; background-color: #d4af37; color: #000000; font-weight: 700; font-size: 12px; text-decoration: none; padding: 12px 24px; border-radius: 8px; text-transform: uppercase; letter-spacing: 1px; }
    .footer { padding: 20px 32px; background-color: #07070a; border-top: 1px solid rgba(255, 255, 255, 0.06); font-size: 12px; color: #646476; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="gold-badge">PRIRAJ GROUP &middot; NEW INQUIRY</div>
      <h1 class="title">New Project Inquiry</h1>
      <p class="subtitle">Received via PRIRAJ GROUP official website on ${escapeHtml(submissionDate)} (IST)</p>
    </div>

    <div class="content">
      <div class="section-heading">Client Information</div>
      <table class="info-table">
        <tr>
          <td class="info-label">Full Name</td>
          <td class="info-value"><strong>${escapeHtml(sanitizedName)}</strong></td>
        </tr>
        <tr>
          <td class="info-label">Email</td>
          <td class="info-value"><a href="mailto:${escapeHtml(sanitizedEmail)}">${escapeHtml(sanitizedEmail)}</a></td>
        </tr>
        <tr>
          <td class="info-label">Phone</td>
          <td class="info-value">${escapeHtml(sanitizedPhone || 'Not provided')}</td>
        </tr>
        <tr>
          <td class="info-label">Company / Brand</td>
          <td class="info-value">${escapeHtml(sanitizedCompany || 'Not provided')}</td>
        </tr>
      </table>

      <div class="section-heading">Project Scope</div>
      <table class="info-table">
        <tr>
          <td class="info-label">Requested Service</td>
          <td class="info-value" style="color: #d4af37; font-weight: 600;">${escapeHtml(sanitizedService)}</td>
        </tr>
        <tr>
          <td class="info-label">Budget</td>
          <td class="info-value">${escapeHtml(sanitizedBudget || 'Not specified')}</td>
        </tr>
        <tr>
          <td class="info-label">Timeline</td>
          <td class="info-value">${escapeHtml(sanitizedTimeline || 'Not specified')}</td>
        </tr>
      </table>

      <div class="section-heading">Project Description</div>
      <div class="description-card">${escapeHtml(sanitizedDescription)}</div>

      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${escapeHtml(sanitizedEmail)}?subject=Re:%20PRIRAJ%20GROUP%20Project%20Inquiry%20&mdash;%20${encodeURIComponent(sanitizedService)}" class="reply-cta">
          Reply Directly to ${escapeHtml(sanitizedName)} &rarr;
        </a>
      </div>
    </div>

    <div class="footer">
      Sent from PRIRAJ GROUP Website &middot; Direct inquiry for ${escapeHtml(recipientEmail)}
    </div>
  </div>
</body>
</html>`;

    // Verify Resend API Key is present in server environment
    if (!isResendConfigured()) {
      return res.status(503).json({
        success: false,
        error: 'Resend API key is not configured.',
        message: 'The server received the project request, but RESEND_API_KEY is not set in the server environment variables.',
        requiredEnvVars: ['RESEND_API_KEY']
      });
    }

    // Initialize Resend SDK
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using verified sender domain and client email as reply-to
    const { data, error } = await resend.emails.send({
      from: senderFrom,
      to: [recipientEmail],
      replyTo: sanitizedEmail,
      subject: emailSubject,
      text: emailPlainText,
      html: emailHtml
    });

    if (error) {
      console.error('[Resend Error]', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to send email via Resend.',
        details: error.message
      });
    }

    return res.status(200).json({
      success: true,
      id: data?.id,
      message: 'Thank you. Your project request has been sent successfully. We’ll review your requirements and get back to you.'
    });

  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal Server Error';
    console.error('[Project Request Error]', errorMsg);
    return res.status(500).json({
      success: false,
      error: 'Something went wrong while sending your request. Please try again or contact us directly.',
      details: errorMsg
    });
  }
};

// Register endpoint routes (support both /api/project-request and /api/inquiry)
app.post('/api/project-request', rateLimiter, handleProjectRequest);
app.post('/api/inquiry', rateLimiter, handleProjectRequest);

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
