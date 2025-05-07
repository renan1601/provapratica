const express = require('express');
const router = require('./rotas/router');
const app = express();

app.use(express.json());
app.use(router);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Servidor ativo em: http://localhost:${PORT}`);
});