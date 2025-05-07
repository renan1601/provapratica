const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const logFilePath = path.join(__dirname, '../logs.txt');

function addLog(nomeAluno) {
    const id = uuidv4();
    const timestamp = new Date().toISOString();
    const logEntry = `${id} - ${timestamp} - ${nomeAluno}\n`;

    fs.appendFileSync(logFilePath, logEntry);
    return id;
}

module.exports = {
    addLog
};