const express = require('express');
const cors = require('cors');

const app = express()

const index = require('./routes/index');
const estoqueRoute = require('./routes/estoque.routes')