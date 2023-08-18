const nodemailer = require("nodemailer");
const Mailgen = require('mailgen')


const sendMail = (req, res) => {

    const { userEmail } = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    });

    let message = {
        from: process.env.NODEMAILER_EMAIL,
        to: userEmail,
        subject: 'My Order',
        html: '<h1>Dear Customer!</h1>'
    }
    transporter.sendMail(message)
    .then(() => res.status(200).json({ message: "Send Successfully" }))
    .catch(err => res.status(500).json({ message: err.message }))
}


const sendFancyMail = (req, res) => {

    const { userEmail } = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    });

    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Sweetest Topping",
            link: 'https://mariaharoon.github.io/BQ-Assignment-01/'
        }
    })

    let response = {
        body: {
            name: "Order Details",
            intro: "Your Bill has Arrived!",
            table: {
                data: [{
                    item: "Chocolate",
                    description: "testing",
                    price: "10$"
                }]
            },
            outro: "Looking Forward!"
        }
    }

let message = {
        from: process.env.NODEMAILER_EMAIL,
        to: userEmail,
        subject: 'Your Order Details',
        html: MailGenerator.generate(response)

    }
    transporter.sendMail(message)
    .then(() => res.status(200).json({ message: "Send Successfully" }))
    .catch(err => res.status(500).json({ message: err.message }))
}

module.exports = { sendMail, sendFancyMail }