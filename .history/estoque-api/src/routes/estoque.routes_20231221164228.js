const router = require('express-promise-router')();
const estoqueController = require('../controllers/estoque.controller');

// Definindo as rotas do CRUD - Estoque

// ===> Rota responsável para criar um novo colaborador(a): (POST): localhost:3000/api/estoque
router.post('/estoque', estoqueController.create)

module.exports = router;