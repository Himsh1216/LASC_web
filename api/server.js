const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
app.use(express.json());

// Validate environment variables
const validateEnv = () => {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is not defined in environment variables.');
  }
  if (!process.env.VERIFIED_EMAIL) {
    throw new Error('VERIFIED_EMAIL is not defined in environment variables.');
  }
};
validateEnv();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const allowedOrigins = [
  'http://localhost:5001',
  'https://lasc-web.vercel.app',
  'https://www.lasc.co.in',
  'https://lasc-web-himsh1216s-projects.vercel.app',
  'https://lasc.co.in',
];

app.use(cors({
  origin: function (origin, callback) {
    console.log('Incoming request from origin:', origin);
    if (!origin) {
      const msg = 'Request with no origin is not allowed.';
      console.log('CORS Error:', msg);
      return callback(new Error(msg), false);
    }
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      console.log('CORS Error:', msg);
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

app.post('/api/contact', contactRateLimiter, async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const msg = {
    to: process.env.VERIFIED_EMAIL,
    from: process.env.VERIFIED_EMAIL,
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('SendGrid Error:', error.response ? error.response.body : error);
    res.status(500).json({ error: 'Error sending email. Please try again later.' });
  }
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', sendgrid: process.env.SENDGRID_API_KEY ? 'Configured' : 'Not Configured' });
});

module.exports = app; // No app.listen() for Vercel deployment
