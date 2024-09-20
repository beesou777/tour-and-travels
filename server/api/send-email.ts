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

    const mailOptionsToSelf = {
        from: 'travelershimalaya@losheaven.com ',
        to: 'travelershimalaya@losheaven.com', 
        subject: `Contact Form Submission: ${subject}`,
        text: `Message from ${email}:\n\n${message}`,
        html: `<p>Message from <strong>${email}</strong>:</p><p>${message}</p>`,
    };
    const mailOptionsToUser = {
        from: 'travelershimalaya@losheaven.com',
        to: email,
        subject: 'Thank you for contacting us!',
        text: `Dear ${email},\n\nThank you for reaching out! We will get back to you soon.\n\nBest regards,\nTravelers Himalaya`,
        html: `<p>Dear <strong>${email}</strong>,</p><p>Thank you for reaching out! We will get back to you soon.</p><p>Best regards,<br/>Travelers Himalaya</p>`,
    };

    try {
        await Promise.all([
            transporter.sendMail(mailOptionsToSelf),
            transporter.sendMail(mailOptionsToUser)
        ])
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw createError({ statusCode: 500, message: 'Failed to send email.' });
    }
});
