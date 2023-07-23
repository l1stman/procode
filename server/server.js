const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
require("./database/engine");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: "procode-secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());

// routes

const codesroute = require("./routes/codes");

app.use("/", codesroute);

var port = process.env.port || 4343;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
