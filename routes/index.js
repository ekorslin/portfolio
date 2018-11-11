var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');
require('dotenv').config();


router.post('/submit', (req, res, next) => {
  console.log(req.body);
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `From: ${name} <br/> email: ${email} <br/> message: ${message} `


sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'eric.korslin@gmail.com',
  from: 'eric.korslin@gmail.com',
  subject: 'e.Korslin Portfolio Site Inquiry',
  text: name,
  html: content,
};
sgMail.send(msg)
.then(() => {
  console.log("Hooray!")
})
.catch(error => {

  //Log friendly error
  console.error(error.toString());
});

})

module.exports = router;