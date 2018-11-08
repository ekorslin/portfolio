var express = require('express');
var router = express.Router();


router.post('/submit', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var content = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${content} `

  


})

module.exports = router;