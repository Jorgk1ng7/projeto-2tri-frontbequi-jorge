const express = require("express");

const app = express();
const porta = 3000;

// Permite receber JSON no body das requisições
app.use(express.json());

// Rota POST para receber um aviso
app.post("/aviso", (req, res) => {
    console.log("Aviso recebido:", req.body);
    res.json({
        mensagem: "Aviso recebido com sucesso!",
        dados: req.body
    });
});

// Rota POST para receber uma tarefa
app.post("/tarefa", (req, res) => {
    console.log("Tarefa recebida:", req.body);
    res.json({
        mensagem: "Tarefa recebida com sucesso!",
        dados: req.body
    });
});

// Rota POST para receber um usuário
app.post("/usuario", (req, res) => {
    console.log("Usuário recebido:", req.body);
    res.json({
        mensagem: "Usuário recebido com sucesso!",
        dados: req.body
    });
});

// Rota POST para receber uma reserva
app.post("/reserva", (req, res) => {
    console.log("Reserva recebida:", req.body);
    res.json({
        mensagem: "Reserva recebida com sucesso!",
        dados: req.body
    });
});

// Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});