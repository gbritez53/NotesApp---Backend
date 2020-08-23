const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");

//Initializations
const app = express();

//Settings

//Middlewares
app.use(express.urlencoded({ extended: false }));
//tener otros metodos en formularios como put y delete
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "mysecretapp",
    resave: true,
    saveUninitialized: true,
  })
);

//Routes
app.use(require("./routes"));
app.use(require("./routes/notes"));
app.use(require("./routes/users"));

//Global Variables

module.exports = app;
