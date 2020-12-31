const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
  // service: process.env.BASE_SERVICE,
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_FORWARD,
    pass: process.env.EMAIL_SEC,
  },
});

async function sendEmail(email, content) {
  transporter.sendMail({
    from: `"no-reply" <${process.env.EMAIL_FORWARD}>`,
    to: `${email}`,
    text: 'This message is automatically reply',
    ...content,
  });
}

exports.handler = async (event) => {
  //   console.log(event);
  const data = JSON.parse(event.body);
  const { name, email, message } = data;
  //   console.log();

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Oops! You are missing the fields.',
      }),
    };
  }

  if (!email.match(/.+@+.+[.]+/gi)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Your email is not valid!',
      }),
    };
  }

  const content = {
    subject: 'Thanks to send me an email',
    html: `<p>Hello ${name}, I'd like to say thanks to you for sending me an email.</p>
    <p>Here is my resume.</p>`,
    attachments: [
      {
        filename: 'myResume.pdf',
        path: process.env.EMAIL_ATTACHMENT,
      },
    ],
  };

  sendEmail(email, content);
  sendEmail(process.env.BASE_EMAIL, {
    subject: 'Get in touch',
    html: `<p>You have an email from ${name} ${email}. He said, '${message}'.</p>`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Success sending a message, Please check your email!',
    }),
  };
};
