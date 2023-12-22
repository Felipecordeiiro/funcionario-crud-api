const express = require('express');
const cors = require('cors');

const app = express()

// ===> Rotas da API (funcionario)
const index = require('./routes/index.js');
const funcRoute = require('./routes/funcionario.routes.js');
//const addProduct = require('./routes/estoque.routes');
//const deleteProdutc = require('./routes/estoque.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
// Funcionário
app.use('/api/', funcRoute);
app.use('/api/', funcRoute);
app.use('/api/', funcRoute);

module.exports = app;