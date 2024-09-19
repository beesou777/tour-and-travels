// server/api/send-email.ts

import { defineEventHandler, readBody, createError } from 'h3';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: 'travelershimalaya@losheaven.com',
        pass: 'July2002@27',
    },
});

export default defineEventHandler(async (event) => {
    const { subject, email, message } = await readBody(event);

    if (!subject || !email || !message) {
        throw createError({ statusCode: 400, message: 'All fields are required' });
    }

    const mailOptions = {
        from: 'travelershimalaya@losheaven.com ',
        to: 'travelershimalaya@losheaven.com', // Replace with your destination email
        subject: `Contact Form Submission: ${subject}`,
        text: `Message from ${email}:\n\n${message}`,
        html: `<p>Message from <strong>${email}</strong>:</p><p>${message}</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw createError({ statusCode: 500, message: 'Failed to send email.' });
    }
});
