/* eslint-disable no-console */
const express = require("express");
const proxy = require("express-http-proxy");
require("dotenv").config();

const cors = require("cors");

const corsOptions = { origin: "*" };

const app = express();
app.use(cors(corsOptions));

const port = process.env.PORT;

app.get("/login", (_req, res) => {
  setTimeout(() => {
    res.status(200).json({
      message: "",
      error: false,
      data: {
        user: "professor",
        password: "professor",
      },
    });
  }, 1500);
});

app.post("/criar-aluno", (_req, res) => {
  setTimeout(() => {
    res.status(200).json({
      message: "",
      error: false,
      data: {
        message: "Aluno criado com sucesso",
      },
    });
  }, 1300);
});

app.post("/criar-questao", (_req, res) => {
  setTimeout(() => {
    res.status(200).json({
      message: "",
      error: false,
      data: {
        message: "Questão criada com sucesso",
      },
    });
  }, 1000);
});

app.post("/criar-prova", (_req, res) => {
  setTimeout(() => {
    res.status(200).json({
      message: "",
      error: false,
      data: {
        message: "Prova criada com sucesso",
      },
    });
  }, 1100);
});

app.post("/atribuir-prova", (_req, res) => {
  setTimeout(() => {
    res.status(200).json({
      message: "",
      error: false,
      data: {
        message: "Prova atribuida com sucesso",
      },
    });
  }, 1100);
});

app.get("/prova/:id/quetoes", (req, res) => {
  setTimeout(() => {
    res.status(200).json({
      message: "",
      error: false,
      data: [],
    });
  }, 3000);
});

app.get("/concluir-prova", (req, res) => {
  setTimeout(() => {
    res.status(200).json({
      message: "",
      error: false,
      data: [],
    });
  }, 3000);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
