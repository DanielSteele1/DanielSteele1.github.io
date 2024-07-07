const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const nodemailer = require('nodemailer');
const app = express();

const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    // transporter object
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Dsteele1906@gmail.com',
            pass: 'qzsy oisx kmzu zion ' //pasword
        }
    });

    let mailOptions = {

        from: email,
        to: 'Dsteele1906@gmail.com',
        subject: 'Website - New Message from ' + name,
        text: message,
        replyTo: email   //actual senders email

    };

    transporter.sendMail(mailOptions, (error, info) => {

        if (error) {
            console.log(error);
            res.send('error');

        } else {
            console.log("Email Sent: " + info.response);
            res.send({ message: 'success', info: info.response });
        }
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('error');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);

});

