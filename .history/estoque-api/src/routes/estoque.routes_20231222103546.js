const router = require('express-promise-router')();
const estoqueController = require('../controllers/estoque.controller');

// ===> Rota responsável para criar um novo colaborador(a): (POST): localhost:3000/api/estoque
router.get('/estoque', estoqueController.estoque)

// ===> Rota responsável para criar um novo colaborador(a): (POST): localhost:3000/api/estoque
router.post('/estoque/addProduct', estoqueController.addProduct)

module.exports = router;