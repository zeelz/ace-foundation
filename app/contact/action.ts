"use server"

import nodemailer from "nodemailer"
// import { MailtrapTransport } from "mailtrap"
// const { MailtrapClient } = require("mailtrap");

export const FormAction = async (formData: FormData) => {
    // console.log({formData})

    // const res = await fetch("http://localhost:3300/api")
    // const data = await res.json()
    // console.log({data})

    


// Looking to send emails in production? Check out our Email API/SMTP product!

    const TOKEN = "92b4d5fba89f4bf6a21866680553377f";
    const SENDER_EMAIL = "hello@example.com";
    const RECIPIENT_EMAIL = "keme.kenneth@gmail.com";

    

    // Create a transporter object
    const transporter = nodemailer.createTransport({
    // host: 'live.smtp.mailtrap.io',
    host: 'sandbox.smtp.mailtrap.io',
    port: 587,
    secure: false, // use SSL
    auth: {
        user: '25786726835a80',
        pass: '7097809abd3d86',
    }
    });

    // Configure the mailoptions object
    const mailOptions = {
        from: SENDER_EMAIL,
        to: RECIPIENT_EMAIL,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    // Send the email
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
    });

}