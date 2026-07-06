const express = require("express");

const app = express();
app.use(express.json());

// ====================
// DADOS EM MEMÓRIA
// ====================

let usuarios = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" }
];

let tarefas = [
    { id: 1, nome: "Estudar", descricao: "Revisar Express" },
    { id: 2, nome: "Projeto", descricao: "Finalizar trabalho" }
];

// ====================
// CRUD USUÁRIOS
// ====================

// Listar todos
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// Buscar por ID
app.get("/usuarios/:id", (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado." });
    }

    res.json(usuario);
});

// Criar
app.post("/usuarios", (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email
    };

    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

// Atualizar apenas o nome
app.put("/usuarios/:id/nome", (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado." });
    }

    usuario.nome = req.body.nome;

    res.json(usuario);
});

// Excluir
app.delete("/usuarios/:id", (req, res) => {
    usuarios = usuarios.filter(u => u.id != req.params.id);

    res.json({ mensagem: "Usuário removido com sucesso." });
});

// ====================
// CRUD TAREFAS
// ====================

// Listar todas
app.get("/tarefas", (req, res) => {
    res.json(tarefas);
});

// Buscar por ID
app.get("/tarefas/:id", (req, res) => {
    const tarefa = tarefas.find(t => t.id == req.params.id);

    if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada." });
    }

    res.json(tarefa);
});

// Criar
app.post("/tarefas", (req, res) => {
    const novaTarefa = {
        id: tarefas.length + 1,
        nome: req.body.nome,
        descricao: req.body.descricao
    };

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
});

// Atualizar apenas o nome
app.put("/tarefas/:id/nome", (req, res) => {
    const tarefa = tarefas.find(t => t.id == req.params.id);

    if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada." });
    }

    tarefa.nome = req.body.nome;

    res.json(tarefa);
});

// Excluir
app.delete("/tarefas/:id", (req, res) => {
    tarefas = tarefas.filter(t => t.id != req.params.id);

    res.json({ mensagem: "Tarefa removida com sucesso." });
});

// ====================
// SERVIDOR
// ====================

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});