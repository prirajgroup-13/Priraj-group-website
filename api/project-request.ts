import { Resend } from 'resend';

// Helper: Escape HTML to prevent XSS in email clients
export const escapeHtml = (unsafe: string): string => {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Helper: Sanitize text inputs
export const sanitizeString = (str: unknown, maxLen = 500): string => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags
    .trim()
    .slice(0, maxLen);
};

// Check if Resend is configured
export const isResendConfigured = (): boolean => {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim() !== '');
};

// Obvious placeholder and test domains that should be rejected
const BLOCKED_DOMAINS = new Set([
  'example.com',
  'example.org',
  'example.net',
  'test.com',
  'test.org',
  'test.net',
  'localhost'
]);

/**
 * Strict server-side email validation.
 * Rejects:
 * - Empty email or invalid types
 * - Format violations (RFC 5322 standard)
 * - Obvious placeholder/test domains (example.com, example.org, test.com, localhost, etc.)
 * - Reserved TLDs (.test, .localhost, .example, .invalid)
 * - Missing top-level domain or TLDs shorter than 2 letters
 *
 * NOTE: Format and syntax validity does not claim the address is verified or owned by the submitter.
 */
export const validateEmail = (email: unknown): { valid: boolean; reason?: string } => {
  if (typeof email !== 'string') {
    return { valid: false, reason: 'Email must be a string' };
  }

  const trimmed = email.trim().toLowerCase();
  if (!trimmed || trimmed.length > 254) {
    return { valid: false, reason: 'Invalid email length' };
  }

  // Standard RFC 5322 regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed)) {
    return { valid: false, reason: 'Invalid email format' };
  }

  const atIndex = trimmed.lastIndexOf('@');
  if (atIndex <= 0 || atIndex === trimmed.length - 1) {
    return { valid: false, reason: 'Invalid email structure' };
  }

  const localPart = trimmed.slice(0, atIndex);
  const domain = trimmed.slice(atIndex + 1);

  if (localPart.length > 64 || domain.length > 255) {
    return { valid: false, reason: 'Local part or domain too long' };
  }

  // Reject explicit placeholder domains
  if (BLOCKED_DOMAINS.has(domain)) {
    return { valid: false, reason: `Placeholder domain rejected: ${domain}` };
  }

  // Reject reserved RFC 2606 / 6761 special-use domains
  if (
    domain.endsWith('.localhost') ||
    domain.endsWith('.test') ||
    domain.endsWith('.example') ||
    domain.endsWith('.invalid')
  ) {
    return { valid: false, reason: 'Special-use/reserved domain rejected' };
  }

  // Domain must contain at least one dot separating labels
  const domainParts = domain.split('.');
  if (domainParts.length < 2) {
    return { valid: false, reason: 'Domain must contain a valid extension' };
  }

  const tld = domainParts[domainParts.length - 1];
  if (!tld || tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) {
    return { valid: false, reason: 'Invalid top-level domain' };
  }

  return { valid: true };
};

// In-memory rate limiting map: IP -> timestamp array
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// In-memory deduplication/idempotency cache to prevent duplicate email dispatches
// Maps submission fingerprint -> { timestamp, inProgress, result }
interface DeduplicationEntry {
  timestamp: number;
  inProgress?: boolean;
  result: any;
}
const deduplicationMap = new Map<string, DeduplicationEntry>();
const DEDUPLICATION_WINDOW_MS = 60 * 1000; // 60 seconds idempotency window

export const checkRateLimit = (clientIp: string): boolean => {
  const now = Date.now();
  const timestamps = rateLimitMap.get(clientIp) || [];
  const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  recentTimestamps.push(now);
  rateLimitMap.set(clientIp, recentTimestamps);
  return true;
};

/**
 * Server-side anti-bot verification (Cloudflare Turnstile or Google reCAPTCHA).
 * - Safe fallback: If neither TURNSTILE_SECRET_KEY nor RECAPTCHA_SECRET_KEY is defined,
 *   the system relies on honeypot + IP rate limiting + email validation without breaking existing submissions.
 * - When configured: Validates the token against the provider API before any email dispatch.
 */
export const verifyCaptchaToken = async (
  token: unknown,
  remoteIp: string
): Promise<{ success: boolean; error?: string }> => {
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

  // Safe fallback if user hasn't configured CAPTCHA keys in environment variables
  if (!turnstileSecret && !recaptchaSecret) {
    return { success: true };
  }

  const tokenStr = typeof token === 'string' ? token.trim() : '';
  if (!tokenStr) {
    return {
      success: false,
      error: 'Bot verification token is missing. Please refresh and try again.'
    };
  }

  try {
    // Cloudflare Turnstile
    if (turnstileSecret) {
      const formData = new URLSearchParams();
      formData.append('secret', turnstileSecret);
      formData.append('response', tokenStr);
      if (remoteIp && remoteIp !== 'unknown') {
        formData.append('remoteip', remoteIp);
      }

      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });
      const verifyData = (await verifyRes.json()) as { success?: boolean; 'error-codes'?: string[] };
      if (!verifyData?.success) {
        return { success: false, error: 'Anti-bot verification failed. Please try again.' };
      }
      return { success: true };
    }

    // Google reCAPTCHA
    if (recaptchaSecret) {
      const formData = new URLSearchParams();
      formData.append('secret', recaptchaSecret);
      formData.append('response', tokenStr);
      if (remoteIp && remoteIp !== 'unknown') {
        formData.append('remoteip', remoteIp);
      }

      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });
      const verifyData = (await verifyRes.json()) as { success?: boolean; 'error-codes'?: string[] };
      if (!verifyData?.success) {
        return { success: false, error: 'Anti-bot verification failed. Please try again.' };
      }
      return { success: true };
    }
  } catch (err) {
    console.error('[CAPTCHA Verification Error]', err);
    return { success: false, error: 'Failed to verify anti-bot challenge. Please try again.' };
  }

  return { success: true };
};

// Vercel Serverless Function & Express Route Handler
export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Support GET for diagnostic status check
  if (req.method === 'GET') {
    const configured = isResendConfigured();
    const captchaProvider = process.env.TURNSTILE_SECRET_KEY
      ? 'cloudflare-turnstile'
      : process.env.RECAPTCHA_SECRET_KEY
      ? 'recaptcha'
      : 'honeypot-ratelimit-only';

    return res.status(200).json({
      status: 'ok',
      configured,
      provider: 'resend',
      sender: process.env.SMTP_FROM || 'PRIRAJ GROUP <hello@prirajgroup.com>',
      businessEmail: process.env.BUSINESS_EMAIL || 'prirajgroup@gmail.com',
      antiSpam: {
        honeypot: true,
        rateLimiting: true,
        emailDomainFilter: true,
        captchaProvider
      },
      requiredEnvVars: configured ? [] : ['RESEND_API_KEY']
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Use POST to submit project requests.'
    });
  }

  try {
    // Parse body if string (e.g., in some serverless environments)
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    } else if (!body) {
      body = {};
    }

    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      description,
      _hp_company_url, // Honeypot field for bot detection
      captcha_token    // Optional Turnstile / reCAPTCHA token
    } = body;

    // Honeypot check: Bots fill hidden fields
    if (_hp_company_url) {
      // Silently accept bot submissions without dispatching emails
      return res.status(200).json({ success: true, message: 'Request processed.' });
    }

    // Rate limiting by client IP
    const clientIp = (req.headers && (req.headers['x-forwarded-for'] || req.headers['x-real-ip'])) ||
      req.socket?.remoteAddress || 'unknown';
    if (!checkRateLimit(String(clientIp))) {
      return res.status(429).json({
        success: false,
        error: 'Too many requests. Please wait a few minutes before submitting another inquiry.'
      });
    }

    // Anti-bot CAPTCHA verification (if secret configured)
    const captchaResult = await verifyCaptchaToken(captcha_token, String(clientIp));
    if (!captchaResult.success) {
      return res.status(403).json({
        success: false,
        error: captchaResult.error || 'Anti-bot verification failed.'
      });
    }

    // Required fields validation & sanitization
    const sanitizedName = sanitizeString(name, 100);
    const sanitizedEmail = sanitizeString(email, 120).toLowerCase();
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

    // Strict server-side email validation per requirement 1
    const emailValidation = validateEmail(sanitizedEmail);
    if (!emailValidation.valid) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.'
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

    // Idempotency check: prevent duplicate submissions sent within 60 seconds
    const submissionFingerprint = `${sanitizedEmail}::${sanitizedService}::${sanitizedDescription.slice(0, 150)}`;
    const now = Date.now();
    const existingSubmission = deduplicationMap.get(submissionFingerprint);

    if (existingSubmission && (now - existingSubmission.timestamp < DEDUPLICATION_WINDOW_MS)) {
      console.log(`[Deduplication] Prevented duplicate email dispatch for: ${sanitizedEmail}`);
      return res.status(200).json(existingSubmission.result);
    }

    // Immediately record an in-flight entry to absorb rapid parallel requests
    deduplicationMap.set(submissionFingerprint, {
      timestamp: now,
      inProgress: true,
      result: {
        success: true,
        message: 'Thank you. Your project request has been sent successfully. We’ll review your requirements and get back to you.'
      }
    });

    // Clean up expired entries if cache grows
    if (deduplicationMap.size > 100) {
      for (const [key, val] of deduplicationMap.entries()) {
        if (now - val.timestamp > DEDUPLICATION_WINDOW_MS) {
          deduplicationMap.delete(key);
        }
      }
    }

    // Verify Resend API Key is present in server environment
    if (!isResendConfigured()) {
      deduplicationMap.delete(submissionFingerprint);
      return res.status(503).json({
        success: false,
        error: 'Resend API key is not configured.',
        message: 'The server received the project request, but RESEND_API_KEY is not set in the server environment variables.',
        requiredEnvVars: ['RESEND_API_KEY']
      });
    }

    const recipientEmail = process.env.BUSINESS_EMAIL || 'prirajgroup@gmail.com';
    const senderFrom = process.env.SMTP_FROM || 'PRIRAJ GROUP <hello@prirajgroup.com>';
    
    // Subject per requirement 2
    const inquirySubject = 'New Project Inquiry — PRIRAJ GROUP';

    const submissionDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    // 1. Plain text version for PRIRAJ GROUP notification
    const inquiryPlainText = `PRIRAJ GROUP
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
PRIRAJ GROUP Official Website
Dispatched directly to ${recipientEmail}`;

    // Professional HTML email with PRIRAJ GROUP dark & gold theme
    const inquiryHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(inquirySubject)}</title>
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

    // Initialize Resend SDK
    const resend = new Resend(process.env.RESEND_API_KEY);

    // STEP 1: Send PRIRAJ GROUP notification email to BUSINESS_EMAIL
    // Using verified sender domain and client email as reply-to
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: senderFrom,
      to: [recipientEmail],
      replyTo: sanitizedEmail,
      subject: inquirySubject,
      text: inquiryPlainText,
      html: inquiryHtml
    });

    if (adminError) {
      // Remove in-flight lock on failure so the user can re-submit
      deduplicationMap.delete(submissionFingerprint);
      console.error('[Resend Error - Business Notification]', adminError);
      return res.status(500).json({
        success: false,
        error: 'Failed to send email via Resend.',
        details: adminError.message
      });
    }

    // STEP 2: Send ONE client confirmation email (per requirement 3)
    // Only executed after PRIRAJ GROUP notification is successfully accepted by Resend
    const confirmationSubject = 'Thank you for contacting PRIRAJ GROUP';
    
    // Exact wording required by prompt
    const confirmationPlainText = `Thank you for contacting PRIRAJ GROUP.

We have received your project inquiry successfully.

Our team will review your requirements and contact you shortly.

Regards,
PRIRAJ GROUP`;

    const confirmationHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(confirmationSubject)}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050508; color: #ededed; margin: 0; padding: 24px; }
    .container { max-width: 580px; margin: 0 auto; background-color: #0d0d12; border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.8); }
    .header { background: linear-gradient(180deg, #171722 0%, #0d0d12 100%); padding: 32px 32px 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); text-align: center; }
    .gold-badge { display: inline-block; color: #d4af37; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; }
    .title { color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; }
    .content { padding: 32px; color: #d6d6dc; font-size: 15px; line-height: 1.7; }
    .message-box { background-color: #14141d; border-left: 3px solid #d4af37; border-radius: 4px; padding: 18px 20px; margin: 20px 0; color: #f0f0f5; }
    .footer { padding: 20px 32px; background-color: #07070a; border-top: 1px solid rgba(255, 255, 255, 0.06); font-size: 12px; color: #747486; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="gold-badge">PRIRAJ GROUP</div>
      <h1 class="title">Inquiry Received</h1>
    </div>
    <div class="content">
      <p style="margin-top: 0;">Thank you for contacting <strong>PRIRAJ GROUP</strong>.</p>
      <div class="message-box">
        <p style="margin: 0 0 12px 0;">We have received your project inquiry successfully.</p>
        <p style="margin: 0;">Our team will review your requirements and contact you shortly.</p>
      </div>
      <p style="margin-bottom: 0;">Regards,<br><strong style="color: #d4af37;">PRIRAJ GROUP</strong></p>
    </div>
    <div class="footer">
      PRIRAJ GROUP &middot; Excellence in Engineering &amp; Development
    </div>
  </div>
</body>
</html>`;

    let clientConfirmationSent = false;
    let clientConfirmationId: string | undefined;

    try {
      const { data: clientData, error: clientError } = await resend.emails.send({
        from: senderFrom,
        to: [sanitizedEmail],
        subject: confirmationSubject,
        text: confirmationPlainText,
        html: confirmationHtml
      });

      if (clientError) {
        console.warn('[Resend Warning - Client Confirmation]', clientError.message);
      } else {
        clientConfirmationSent = true;
        clientConfirmationId = clientData?.id;
      }
    } catch (clientSendErr) {
      console.warn('[Resend Warning - Client Confirmation Exception]', clientSendErr);
    }

    const successResponse = {
      success: true,
      id: adminData?.id,
      clientConfirmationSent,
      clientConfirmationId,
      message: 'Thank you. Your project request has been sent successfully. We’ll review your requirements and get back to you.'
    };

    // Store completed success response in deduplication cache for the 60-second window
    deduplicationMap.set(submissionFingerprint, {
      timestamp: Date.now(),
      inProgress: false,
      result: successResponse
    });

    return res.status(200).json(successResponse);

  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal Server Error';
    console.error('[Project Request Error]', errorMsg);
    return res.status(500).json({
      success: false,
      error: 'Something went wrong while sending your request. Please try again or contact us directly.',
      details: errorMsg
    });
  }
}
