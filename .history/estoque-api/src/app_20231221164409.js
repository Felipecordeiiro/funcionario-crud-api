const express = require('express');
const cors = require('cors');

const app = express()

// ===> Rotas da API (estoque)
const index = require('./routes/index.js');
const estoqueRoute = require('./routes/estoque.routes');
const addProduct = require('./routes/estoque.routes');
const deleteProdutc = require('./routes/estoque.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', estoqueRoute);

module.exports = app;