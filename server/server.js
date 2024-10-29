require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;
// CORS Configuration
const corsOptions = {
    origin: 'https://hasinimiryala.netlify.app/', // Replace with your frontend URL, e.g., Netlify URL
    optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Create the transporter using environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please fill in all fields' });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Sends to your email
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ msg: 'Error sending email. Please try again later.' });
        }
        res.status(200).json({ msg: 'Message sent successfully!' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
