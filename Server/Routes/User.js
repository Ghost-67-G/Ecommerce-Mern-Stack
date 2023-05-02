const route = require("express").Router();
const User = require("../db/Models/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jsonwebtoken = require("jsonwebtoken");
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
const smtpTransport = nodemailer.createTransport(
  "smtps://ayannaseer476%40gmail.com:noxaadvkvttadyrc@smtp.gmail.com"
);
route.post("/signup", (req, res) => {
  bcrypt.hash(req.body.user_password, 10, function (err, hash) {
    req.body.user_password = hash;
    const token = jsonwebtoken.sign(
      {
        data: req.body,
      },
      "ourSecretKey",
      { expiresIn: "10m" }
    );
    const link = "http://" + req.get("host") + "/verify?id=" + token;
    const mailOptions = {
      to: req.body.user_email,
      subject: "Please confirm your Email account",
      html:
        "Hello,<br> Please Click on the link to verify your email.<br><a href=" +
        link +
        ">Click here to verify</a>",
    };
    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        res.end("error");
      } else {
        res.end("sent");
      }
    });
  });
});

route.get("/verify", function (req, res) {
  jsonwebtoken.verify(
    req.query.id,
    "ourSecretKey",
    async function (err, decoded) {
      if (err) {
        res.send(
          "Email verification failed, possibly the link is invalid or expired"
        );
      } else {
        let user = new User(decoded.data);
        user.order = []
        user.cart ={}
        await user.save();
        let log = User.findOne({ user_name: decoded.data.user_name });
        if (log) {
          res.json({
            success: true,
            user: log,
          });
        }
      }
    }
  );
});

module.exports = route;
