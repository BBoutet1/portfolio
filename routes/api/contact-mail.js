const nodemailer = require('nodemailer');
const router = require("express").Router();
require('dotenv').config()


const bunyan = require('bunyan');
let logger = bunyan.createLogger({
    name: 'nodemailer'
});
logger.level('trace');

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
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


router.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message


    const mail = {
        from: `Porfolio visitor: ${name} <${email}>`,
        to: 'boutetlb@gmail.com', // Email address that you want to receive messages on
        subject: subject,
        text: message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
            console.log("fail")
        } else {
            res.json({
                status: 'success'
            })
            console.log("sucess")
        }
    })
})

module.exports = router;