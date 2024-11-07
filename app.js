const express = require("express");
const session = require("express-session");
const router = require("./routers");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "fox-sense-insurance",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      // maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
