const db = require('../config/database');

exports.estoque = async (req, res) => {
  const { itemId, quantity, group, description, CPF, warehouse, comment } = req.body;
  // CPF, C -> Consumível, P -> Peça, F -> Ferramenta

  try {
    
  } catch (error) {
    console.log(error)
  }
  res.status(201).send({
    message: 'Conta criada com sucesso!',
    body: {
      funcionario: { userId, userName, email, password }
    },
  })
}