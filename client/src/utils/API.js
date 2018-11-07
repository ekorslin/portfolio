import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

module.exports = function(app) {

  // Passport recieves a request. We check to see if the requset is okay, If it is, pass it on to next function.
  // Nestling passport here, as it functions as a gatekeeper.
  app.post("/submit", function(req, res) {
    console.log(req.body);
    });
  };
