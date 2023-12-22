const express = require('express');
const cors = require('cors');

const app = express()

// ===> Rotas da API (funcionario)
const index = require('./routes/index.js');
const funcRoute = require('./routes/funcionario.routes.js');
//const estoqueRoute = require('./routes/estoque.routes.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
// Funcionários
app.use('/api/', funcRoute);
// Estoque
app.use('/api/', estoqueRoute);

module.exports = app;