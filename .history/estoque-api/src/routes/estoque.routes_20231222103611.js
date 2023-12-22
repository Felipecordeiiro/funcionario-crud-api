const router = require('express-promise-router')();
const estoqueController = require('../controllers/estoque.controller');

// ===> Rota responsável para consultar os itens do estoque: (GET): localhost:3000/api/estoque
router.get('/estoque', estoqueController.estoque)

// ===> Rota responsável para adicionar um novo produto: (POST): localhost:3000/api/estoque/addProdutc
router.post('/estoque/addProduct', estoqueController.addProduct)

module.exports = router;