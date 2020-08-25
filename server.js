const express = require('express');
const router = express.Router();
require('dotenv').config()
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config/config');

const bunyan = require('bunyan');
let logger = bunyan.createLogger({
    name: 'nodemailer'
});
logger.level('trace');

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', router)

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER, //process.env.user,
        pass: process.env.PASS //process.env.password
    },
    tls: {
        rejectUnauthorized: false
    },
    debug: true, // show debug output
    logger: true // log information in console
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});


router.post('/send', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    const content = `name: ${name} \nemail: ${email} \nsubject: ${subject} \nmessage: ${message} `

    const mail = {
        from: `Porfolio visitor: ${name} <${email}>`,
        to: 'boutetlb@gmail.com', // Email address that you want to receive messages on
        subject: subject,
        text: content
    }

    console.log(mail)

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})


app.listen(3001, () => { console.log("App running at port 3001") })