// Netlify Function for Email Sending
// This file should be placed in /netlify/functions/ directory for Netlify deployment

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  try {
    const { to, subject, html, text, replyTo, language } = JSON.parse(event.body);

    // Validate required fields
    if (!to || !subject || !html || !replyTo) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          success: false, 
          error: language === 'es' 
            ? 'Faltan campos requeridos' 
            : 'Missing required fields' 
        })
      };
    }

    // Create transporter (using environment variables)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Set in Netlify environment variables
        pass: process.env.GMAIL_APP_PASSWORD // Gmail App Password
      }
    });

    // Email options
    const mailOptions = {
      from: `"Robolift Contact Form" <${process.env.GMAIL_USER}>`,
      to: to,
      replyTo: replyTo,
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
      headers: {
        'X-Mailer': 'Robolift Contact Form',
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal'
      }
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        messageId: info.messageId,
        message: language === 'es' 
          ? 'Correo enviado exitosamente' 
          : 'Email sent successfully'
      })
    };

  } catch (error) {
    console.error('Email sending error:', error);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: false,
        error: error.message || (
          event.body && JSON.parse(event.body).language === 'es'
            ? 'Error interno del servidor'
            : 'Internal server error'
        )
      })
    };
  }
};