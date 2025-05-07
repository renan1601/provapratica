const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const filePath = path.join(__dirname, 'logs.txt');

function logMessage(message) {
const id = uuidv4();
const timestamp = new Date().toISOString();
const logEntry = `${id} - ${timestamp} - ${message}\n`;

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo de log:', err);
        } else {
            console.log('Mensagem registrada com sucesso!');
        }
    });
    }