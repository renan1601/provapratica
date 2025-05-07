const express = require('express');
const { addLog } = require('../controles/control.js');
const router = express.Router();

router.post('/logs', (req, res) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ erro: 'Nome do aluno é obrigatório.' });
    }
    const id = addLog(nome);
    res.json({ id, mensagem: 'Log registrado com sucesso.' });
});

module.exports = router;