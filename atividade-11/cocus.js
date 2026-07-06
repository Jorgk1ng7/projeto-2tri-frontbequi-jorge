const express = require("express");

const app = express();
const porta = 3000;


app.get("/", (req, res) => {
    res.send("Bem-vindo ao projeto!");
});


app.get("/sobre", (req, res) => {
    res.send("Este projeto foi desenvolvido para praticar rotas com Express.");
});


app.get("/equipe", (req, res) => {
    res.send("Nossa equipe é formada por estudantes dedicados ao desenvolvimento do projeto.");
});


app.get("/contato", (req, res) => {
    res.send("Entre em contato conosco pelo e-mail: contato@projeto.com.");
});


app.get("/servicos", (req, res) => {
    res.send("Aqui você encontra os serviços oferecidos pelo projeto.");
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:3001`);
});