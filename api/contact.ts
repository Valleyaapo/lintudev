

// Define types for Vercel serverless functions
interface VercelRequest {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body: any;
  socket?: {
    remoteAddress?: string;
  };
}

interface VercelResponse {
  status: (code: number) => VercelResponse;
  json: (data: any) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot field
}

// Extend global with requestCounts for rate limiting
declare global {
  var requestCounts: Record<string, number[]>;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Basic rate limiting per IP - allow 5 requests per minute
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const key = `rate-limit:${ip}`;
  
  // Note: This uses a simple in-memory store that resets per deployment
  // For production, consider Vercel KV for persistent rate limiting
  if (!global.requestCounts) {
    global.requestCounts = {};
  }

  const now = Date.now();
  const windowMs = 60000; // 1 minute window
  
  if (!global.requestCounts[key]) {
    global.requestCounts[key] = [];
  }

  // Clean old requests outside the window
  global.requestCounts[key] = global.requestCounts[key].filter(
    (timestamp: number) => now - timestamp < windowMs
  );

  // Check if rate limit exceeded (5 requests per minute)
  if (global.requestCounts[key].length >= 5) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  // Record this request
  global.requestCounts[key].push(now);

  try {
    const { name, email, message, website } = req.body as ContactFormData;

    // Honeypot protection - if the hidden field is filled, it's likely a bot
    if (website && website.trim() !== '') {
      // Return success to not reveal honeypot to bots
      return res.status(200).json({ success: true });
    }

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Send email using Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Contact Form <contact@lintu.dev>',
        to: 'hello@lintu.dev',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        reply_to: email,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend API error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
