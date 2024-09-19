import { defineEventHandler, createError } from 'h3';
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
    const { name, subject, email, message } = await readBody(event);

    if (!name || !subject || !email || !message) {
        throw createError({ statusCode: 400, message: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465, // Port should be a number
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: 'travelershimalaya@losheaven.com',
        subject: `Contact Form Submission: ${subject}`,
        text: `Message from ${name} (${email}):\n\n${message}`,
        html: `<p>Message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`, // HTML content
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw createError({ statusCode: 500, message: 'Failed to send email.' });
    }
});
