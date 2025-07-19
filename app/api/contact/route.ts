import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com', 'smtp.outlook.com', 'smtp.yourprovider.com'
      port: parseInt(process.env.SMTP_PORT || '587'), // Usually 587 for TLS or 465 for SSL
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASS, // Your email password or app password
      },
    });

    // Email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Subject: ${subject}

Message:
${message}

---
This message was sent from the Workora website contact form.
    `;

    // HTML version for better formatting
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Submission</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 40px;">
  <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); overflow: hidden;">
    <div style="background-color: #d4af62; padding: 20px; text-align: center; color: #fff;">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
    </div>
    <div style="padding: 30px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 15px; line-height: 1.6;">
        <tr>
          <td style="font-weight: bold;">Name:</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td style="font-weight: bold;">Email:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td style="font-weight: bold;">Phone:</td>
          <td>${phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="font-weight: bold;">Company:</td>
          <td>${company || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="font-weight: bold;">Subject:</td>
          <td>${subject}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; vertical-align: top;">Message:</td>
          <td>${message.replace(/\n/g, '<br>')}</td>
        </tr>
      </table>
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
      <p style="font-size: 13px; color: #999;">
        This message was sent from the <strong>Workora</strong> website contact form.<br>
        Please do not share sensitive information over email.
      </p>
    </div>
    <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
      <img src="https://workora.ae/workora-logo.png" alt="Workora Logo" style="height: 60px; width: auto; margin-bottom: 10px;" />
      <p style="margin: 5px 0; font-size: 14px; color: #666;">
        <a href="https://workora.ae" style="color: #d4af62; text-decoration: none; font-weight: bold;">Visit Our Website</a>
      </p>
      <p style="margin: 5px 0; font-size: 12px; color: #999;">
        Professional Recruitment Solutions
      </p>
    </div>
  </div>
</body>
</html>
`;

    // Send email
    const mailOptions = {
      from: process.env.SMTP_USER, // Your email address
      to: 'info@workora.ae', // Where you want to receive the emails
      subject: `New Contact Form Submission: ${subject}`,
      text: emailContent,
      html: htmlContent,
      replyTo: email, // So you can reply directly to the sender
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 