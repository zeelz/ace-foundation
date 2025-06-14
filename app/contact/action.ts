"use server"

// import nodemailer from "nodemailer"
// import { MailtrapTransport } from "mailtrap"


const Nodemailer = require("nodemailer");
import { MailtrapTransport } from "mailtrap";


export const FormAction = async (formData: FormData) => {

    const firstname = formData.get("firstname") as string
    const lastname = formData.get("lastname") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

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
    category: "Contact Form",
  })
  .then(console.log, console.error);

  return {success: true, message: "sent successfully"}


}