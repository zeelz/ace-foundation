"use server"

// import nodemailer from "nodemailer"
// import { MailtrapTransport } from "mailtrap"


const Nodemailer = require("nodemailer");
import { MailtrapTransport } from "mailtrap";


export const FormAction = async (formData: FormData) => {

    const firstname = formData.get("firstname")
    const lastname = formData.get("lastname")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const message = formData.get("message")

    const mailBody = `
        \nName: ${firstname} ${lastname}
        \nEmail: ${email}
        \nPhone: ${phone}
        \nMessage: ${message}
    `

const TOKEN = process.env["NEXT_TOKEN"] || "";

const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

const sender = {
  address: "hello@acefoundation.com.ng",
  name: "Ace Foundation",
};
const recipients = [
  "hello@acefoundation.com.ng",
];

transport
  .sendMail({
    from: sender,
    to: recipients,
    subject: "Message from Contact Form",
    text: mailBody,
    category: "Integration Test",
  })
  .then(console.log, console.error);




}