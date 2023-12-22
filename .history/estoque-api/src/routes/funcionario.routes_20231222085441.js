

const router = require('express-promise-router')();
const funcController = require('../controllers/funcionario.controller');

// ===> Definindo as rotas do CRUD - Estoque

// ===> Rota responsável para criar um novo funcionário: (POST): localhost:3000/api/estoque/funcionarios
router.post('/funcionarios', funcController.createUser);

module.exports = router;