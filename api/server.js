const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

// Debug: Log the SendGrid API key (masked)
console.log('SendGrid API Key loaded:', process.env.SENDGRID_API_KEY ? 'Yes' : 'No');
if (!process.env.SENDGRID_API_KEY) {
  console.error('WARNING: SendGrid API key is not set in environment variables');
}

const allowedOrigins = [
  'http://localhost:5001',
  'https://lasc-web.vercel.app',
  'https://www.lasc.co.in',
  'https://lasc-web-himsh1216s-projects.vercel.app',
  'https://lasc.co.in'
];

app.use(cors({
  origin: function(origin, callback) {
    // Debug: Log incoming request origins
    console.log('Incoming request from origin:', origin);
    
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      console.log('CORS Error:', msg);
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', {
    name: req.body.name,
    email: req.body.email,
    messageLength: req.body.message ? req.body.message.length : 0
  });

  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    console.log('Validation Error: Missing required fields');
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('Validation Error: Invalid email format:', email);
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const msg = {
    to: process.env.VERIFIED_EMAIL,
    from: process.env.VERIFIED_EMAIL, // This email must be verified in SendGrid
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      This message was sent from the contact form on www.lasc.co.in
    `,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0891b2;">New Contact Form Submission</h2>
        <div style="margin: 20px 0; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
        <p style="color: #6b7280; font-size: 0.875rem;">
          This message was sent from the contact form on www.lasc.co.in
        </p>
      </div>
    `,
  };

  // Debug: Log email configuration
  console.log('Attempting to send email with configuration:', {
    to: msg.to,
    from: msg.from,
    subject: msg.subject
  });

  try {
    const response = await sgMail.send(msg);
    console.log('SendGrid Response:', {
      statusCode: response[0].statusCode,
      headers: response[0].headers
    });

    // Send confirmation email
    const confirmationMsg = {
      to: email,
      from: process.env.VERIFIED_EMAIL, // Must use the same verified sender
      subject: 'Thank you for contacting LASC',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">Thank you for contacting LASC</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>For urgent matters, you can reach us at:</p>
          <ul>
            <li>Phone: +91 7862993485</li>
            <li>Email: info.lasc123@gmail.com</li>
          </ul>
          <p>Best regards,<br>LASC Team</p>
        </div>
      `
    };

    console.log('Attempting to send confirmation email to:', email);
    await sgMail.send(confirmationMsg);
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('SendGrid Error Details:', {
      code: error.code,
      message: error.message,
      response: error.response ? {
        body: error.response.body,
        headers: error.response.headers,
        statusCode: error.response.statusCode
      } : 'No response object'
    });

    // Check for specific error conditions
    if (error.code === 403) {
      console.error('Possible causes of 403 error:');
      console.error('1. SendGrid API key is invalid or revoked');
      console.error('2. Sender email is not verified');
      console.error('3. IP address is not whitelisted');
      console.error('4. Account has been suspended');
    }

    let errorMessage = 'Error sending email. Please try again later.';
    if (error.response && error.response.body && error.response.body.errors) {
      console.log('SendGrid Error Messages:', error.response.body.errors);
      errorMessage = error.response.body.errors.map(e => e.message).join(', ');
    }

    res.status(500).json({ error: errorMessage });
  }
});

app.get('/health', (req, res) => {
  const status = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    sendgrid: process.env.SENDGRID_API_KEY ? 'Configured' : 'Not Configured'
  };
  console.log('Health check:', status);
  res.status(200).json(status);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Allowed Origins:', allowedOrigins);
});

// Global error handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

module.exports = app;
