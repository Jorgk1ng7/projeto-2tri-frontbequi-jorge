const express = require("express");

const app = express();
const porta = 3000;

// Rota GET para listar usuários
app.get("/usuarios", (req, res) => {
    const usuarios = [
        "João",
        "Maria",
        "Carlos"
    ];

    res.json(usuarios);
});

// Rota GET para listar tarefas
app.get("/tarefas", (req, res) => {
    const tarefas = [
        "Estudar JavaScript",
        "Fazer atividade",
        "Enviar projeto"
    ];

    res.json(tarefas);
});

// Rota GET para mostrar reservas
app.get("/reservas", (req, res) => {
    const reservas = [
        "Laboratório de Informática - Segunda",
        "Sala Multimídia - Terça",
        "Biblioteca - Sexta"
    ];

    res.json(reservas);
});

// Rota GET para mostrar mensagem de sistema ativo
app.get("/status", (req, res) => {
    res.send("Sistema ativo!");
});

// Rota GET que devolve um array com três turmas
app.get("/turmas", (req, res) => {
    const turmas = [
        "1º Ano A",
        "2º Ano B",
        "3º Ano C"
    ];

    res.json(turmas);
});

// Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:3001`);
});