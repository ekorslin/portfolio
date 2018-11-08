const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
var cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'beaverCreekdb'
//   });
// };
app.use(cors());
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Send every other request (anything else) to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our database and logging a message to the user upon success
// using db.sequelize.sync({force: true}).then(function() { will reset db every time.

  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
