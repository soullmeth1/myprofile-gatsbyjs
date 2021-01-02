const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function createTransporter() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: process.env.BASE_SERVICE,
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_FORWARD,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    return transport;
  } catch (error) {
    return error;
  }
}

function Message(email, data, me = false) {
  if (!me) {
    return {
      from: 'no-reply <clothes.up92@gmail.com>',
      to: `${email}`,
      text: 'This is an auto email',
      subject: 'Thanks to send me an email',
      html: `<p>Hello ${data.name}, I'd like to say thanks to you for sending me an email.</p>
      <p>There is my resume attached and I hope you interested so we can join together.</p>
      <p>See ya..</p>`,
      attachments: [
        {
          // use URL as an attachment
          filename: 'myResume.pdf',
          path: process.env.EMAIL_ATTACHMENT,
        },
      ],
    };
  } else {
    return {
      from: 'no-reply <clothes.up92@gmail.com>',
      to: `${process.env.BASE_EMAIL}`,
      text: 'This is an auto email',
      subject: 'You have an email',
      html: `<p>You have an email from ${data.name} and he said "${data.message}"</p>
      <p>You can reply to this email ${data.email}</p>`,
    };
  }
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

  const transporter = await createTransporter();

  const res = await Promise.race([
    transporter.sendMail(Message(email, data)),
    transporter.sendMail(Message(email, data, true)),
  ]);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Email has been sent!',
      ...res,
    }),
  };
};
