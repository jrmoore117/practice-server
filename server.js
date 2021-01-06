// Dependencies
// ==================================================
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
// ==================================================

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}


// Routes
// ==================================================

const routes = require("./routes");
app.use(routes);


// Start API server
// ==================================================

app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});