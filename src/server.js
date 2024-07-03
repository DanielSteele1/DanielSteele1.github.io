const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.post ('/send-email', (req, res) => {
const {email, message } = req.body;

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
    subject: 'WEBSITE - NEW MESSAGE',
    text: message,

};

transporter.sendMail(mailOptions, (error, info) => {

    if (error) {
        console.log(error);
        res.send('error');

    } else {
        console.log("Email Sent: " + info.response);
        res.send('success');
    }
});


});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});