/* eslint-disable no-console */
const express = require("express");
const proxy = require("express-http-proxy");
require("dotenv").config();

const cors = require("cors");

const corsOptions = { origin: "*" };

const app = express();
app.use(cors(corsOptions));

const port = process.env.PORT;

app.get("/login", (req, res) => {
  setTimeout(() => {
    res.json({
      message: "",
      error: false,
      data: {
        user: "professor",
        password: "professor",
      },
    });
  }, 2000);
});

// app.all("*", proxy(process.env.API));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
