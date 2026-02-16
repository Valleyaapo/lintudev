import { escapeHtml } from '../../utils/sanitize';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  website?: string;
}

export const prerender = false;

const requestCounts: Record<string, number[]> = {};

const json = (status: number, data: unknown) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });

export async function POST({ request }: { request: Request }) {
  try {
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
    const key = `rate-limit:${ip}`;

    const now = Date.now();
    const windowMs = 60000;

    requestCounts[key] = (requestCounts[key] || []).filter(
      (timestamp) => now - timestamp < windowMs
    );

    if (requestCounts[key].length >= 5) {
      return json(429, { error: 'Too many requests. Please try again later.' });
    }

    requestCounts[key].push(now);

    let data: ContactFormData;
    try {
      data = (await request.json()) as ContactFormData;
    } catch {
      return json(400, { error: 'Invalid JSON payload' });
    }

    const { name, email, message, website } = data;

    if (website && website.trim() !== '') {
      return json(200, { success: true });
    }

    if (!name || !email || !message) {
      return json(400, { error: 'All fields are required' });
    }

    if (name.length > 100) {
      return json(400, { error: 'Name is too long (max 100 chars)' });
    }

    if (message.length > 5000) {
      return json(400, { error: 'Message is too long (max 5000 chars)' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json(400, { error: 'Invalid email address' });
    }

    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
    
    // In development, if no API key is set, just log and return success
    if (!RESEND_API_KEY) {
      console.log('Development mode - Contact form submission:', { name, email, message });
      return json(200, { success: true, dev: true });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Contact Form <contact@lintu.dev>',
        to: 'hello@lintu.dev',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
        reply_to: email
      })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error('Resend API error:', error);
      return json(500, { error: 'Failed to send email' });
    }

    return json(200, { success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return json(500, { error: 'Internal server error' });
  }
}

export async function GET() {
  return json(405, { error: 'Method not allowed' });
}
