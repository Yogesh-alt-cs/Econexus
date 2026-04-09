import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { name, email, interests, availability, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Uses environment variables set in Vercel for the secure credentials
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_APP_PASSWORD;

  if (!emailUser || !emailPass) {
    console.error("Environment variables EMAIL_USER or EMAIL_APP_PASSWORD are not configured.");
    return res.status(500).json({ error: 'Server misconfiguration: Email setup is incomplete.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${emailUser}>`,
      replyTo: email,
      to: 'econexusnceh@gmail.com',
      subject: `New Eco Nexus Application: ${name}`,
      text: `
You have received a new application submission for Eco Nexus.

Submission Details:
--------------------------------
Name: ${name}
Email: ${email}
Interests: ${interests || 'None selected'}
Availability: ${availability || 'Not specified'}
Message: 
${message}
--------------------------------

Sent at: ${new Date().toISOString()}
      `,
      html: `
        <h2>New Eco Nexus Application Submission</h2>
        <p>You have received a new application submission via the Eco Nexus website.</p>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interests:</strong> ${interests || 'None selected'}</p>
        <p><strong>Availability:</strong> ${availability || 'Not specified'}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p style="padding: 10px; background-color: #f9f9f9; border-left: 4px solid #4CAF50;">${message}</p>
        <hr />
        <p><em>Sent at: ${new Date().toISOString()}</em></p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: ", info.messageId);

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("NodeMailer error:", error);
    return res.status(500).json({ error: 'Failed to send email securely. Please try again later.' });
  }
}
