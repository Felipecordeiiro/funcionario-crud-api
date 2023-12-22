const db = require('../config/database');

exports.estoque = async (req, res) => {
  const { itemId, quantity, group, description, CPF, warehouse, comment } = req.body;
  // CPF, C -> Consumível, P -> Peça, F -> Ferramenta
}