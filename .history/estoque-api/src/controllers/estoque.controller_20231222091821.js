const db = require('../config/database');

exports.estoque = async (req, res) => {
  const { itemId, quantity, group, description, CPF, warehouse, comment };
  // CPF, C -> Consumível, P -> Peça, F -> 
}