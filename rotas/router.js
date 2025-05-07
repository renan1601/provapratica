const express = require('express');
const { addLog } = require('../controles/control.js');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const logFilePath = path.join(__dirname, '../logs.txt');

router.post('/logs', (req, res) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ erro: 'Nome do aluno é obrigatório.' });
    }
    const id = addLog(nome);
    res.json({ id, mensagem: 'Log registrado com sucesso.' });
});

router.get('/logs/:id', (req, res) => {
    const { id } = req.params;
    if (!fs.existsSync(logFilePath)) {
        return res.status(404).json({ erro: 'Arquivo de logs não encontrado.' });
    }
    const linhas = fs.readFileSync(logFilePath, 'utf-8').split('\n');
    const linha = linhas.find(l => l.startsWith(id));
    if (linha) {
        return res.status(200).json({ mensagem: linha });
    } else {
        return res.status(404).json({ erro: 'Log não encontrado.' });
    }
});

module.exports = router;