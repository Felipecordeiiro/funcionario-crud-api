const router = require('express-promise-router')();
const estoqueController = require('../controllers/estoque.controller');

// ===> Rota responsável para consultar os itens do estoque: (GET): localhost:3000/api/estoque
router.get('/estoque', estoqueController.listEstoque)

// ===> Rota responsável para adicionar um novo item: (POST): localhost:3000/api/estoque/addItem
router.post('/estoque', estoqueController.addItem)

module.exports = router;