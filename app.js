const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Função para checar o status de um site
async function checkSite(url) {
    const startTime = Date.now();

    try {
        const response = await axios.get(url);
        const elapsedTime = Date.now() - startTime;

        return {
            url,
            status: 'success',
            message: `✔ ${url} está funcionando corretamente!`,
            time: `${elapsedTime}ms`,
        };
    } catch (error) {
        const elapsedTime = Date.now() - startTime;

        return {
            url,
            status: 'error',
            message: `✖ Erro ao acessar ${url}: ${error.message}`,
            time: `${elapsedTime}ms`,
        };
    }
}

// Definir uma rota para a página principal
app.use(express.static(path.join(__dirname, 'public')));

// Rota para retornar os resultados dos health checks
app.get('/healthcheck', async (req, res) => {
    const sites = [
        'https://www.google.com',
        'https://www.facebook.com',
        'https://www.github.com',
        'https://www.amazon.com',
    ];

    const results = [];

    for (let site of sites) {
        const result = await checkSite(site);
        results.push(result);
    }

    // Enviar os resultados como resposta em formato JSON
    res.json(results);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
