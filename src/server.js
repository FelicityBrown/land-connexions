const nodemailer = require("nodemailer");

function getParamsFromUrl(url) {
  url = decodeURIComponent(url);
  if (typeof url === "string") {
    let eachParamsArr = url.split("&");
    let obj = {};
    if (eachParamsArr && eachParamsArr.length) {
      eachParamsArr.map((param) => {
        let keyValuePair = param.split("=");
        let key = keyValuePair[0];
        let value = keyValuePair[1];
        obj[key] = value;
      });
    }
    return obj;
  }
}

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(subject, from, plainText, htmlText) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USERNAME, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.EMAIL_FROM, // sender address
    replyTo: from,
    to: process.env.EMAIL_RECIPIENT,
    subject: subject, // Subject line
    text: plainText, // plain text body
    html: htmlText, // html body
  });

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// Node.js: HTTP SERVER Handling GET and POST Request
// Show HTML Form at GET request.
// At POST Request: Grab form data and display them.
// Get Complete Source Code from Pabbly.com

var http = require("http");

http
  .createServer(function (req, res) {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("server");
    } else if (req.method === "POST") {
      var body = "";
      req.on("data", function (chunk) {
        body += chunk;
      });
      req.on("end", function () {
        var data = getParamsFromUrl(body.replace(/\+/g, "%20"));
        var plainText = `Name: ${data.name}\r\nEmail: ${
          data.emailAddress
        }\r\nPhone: ${data.phoneNumber}\r\n\r\nMessage:\r\n${decodeURIComponent(
          data.text
        )}`;
        var htmlText = `<p><b>Name:</b> ${data.name}</p><p><b>Email:</b> ${
          data.emailAddress
        }</p><p><b>Phone:</b> ${
          data.phoneNumber
        }</p><hr/><p><b>Message:</b></p><p>${decodeURIComponent(
          data.text
        )}</p>`;
        sendEmail(
          `Contact form submitted by ${data.name}`,
          `"${data.name}" <${data.emailAddress}>`,
          plainText,
          htmlText
        );
        res.writeHead(302, {
          location: "/thankyou",
        });
        res.end("");
      });
    }
  })
  .listen(3001);
