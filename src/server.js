const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const nodemailer = require('nodemailer');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.unsubscribe(cors());


// transporter object
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Dsteele1906@gmail.com',
        pass: 'qzsy oisx kmzu zion ' //pasword
    }
});

let mailVariables = {

from: email, 
to: 'Dsteele1906@gmail.com',
subject: 'WEBSITE - NEW MESSAGE',
text: message,

};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);

});

