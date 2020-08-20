const express = require('express');
// const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config/config');
//-----------------------------
const path = require("path");
const router = require("express").Router();


const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', router)

// app.use('/', router);

// app.post("/api/send", (req, res) => {

// })


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//----------------------------------------
const transport = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0105e36894884d",
        pass: "1977492f03d4ae"
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});


router.post('/send', cors(), (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n message: ${message} `

    const mail = {
        from: name,
        to: 'boutetlb@gmail.com', // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
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