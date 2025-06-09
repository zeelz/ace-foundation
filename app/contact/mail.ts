// Looking to send emails in production? Check out our Email API/SMTP product!
const { MailtrapClient } = require("mailtrap");

const TOKEN = "<YOUR_API_TOKEN>";

const client = new MailtrapClient({
  token: TOKEN,
  testInboxId: 450749,
});

const sender = {
  email: "hello@example.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "keme.kenneth@gmail.com",
  }
];

client.testing
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);