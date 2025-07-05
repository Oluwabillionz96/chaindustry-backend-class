const nodemailer = require('nodemailer')

const sendMailData = async (options) => {
    const credentials = nodemailer.createTransport({
        host: process.env.MAILHOST,
        port: process.env.MAILPORT || 465,
        secure: process.env.MAILSECURE || true,
        // service: process.env.MAILSERVICE,
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPASSWORD,
        }
    });

    const message = {
        from: `chaindustry <no-reply@chaindustry.io>`,
        to: options.email,
        subject: options.subject,
        html: options.message,
        text: options.body,
    };

    const info = await credentials.sendMail(message);

    console.log("Message sent: %s", info.messageId);
}

module.exports = sendMailData

