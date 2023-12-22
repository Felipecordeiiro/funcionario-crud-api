const db = require('../config/database');

exports.estoque = async (req, res) => {
  const { itemId, quantity, group, description, CPF, warehouse, comment } = req.body;
  // CPF, C -> Consumível, P -> Peça, F -> Ferramenta
  try {

  } catch (error) {
    console.log(error)
  }

}

exports.addProduct = async (req, res) => {
  const { itemId, quantity, group, description, CPF, warehouse, comment } = req.body;
  // CPF, C -> Consumível, P -> Peça, F -> Ferramenta
  try {
    const { rows } = await db.query(
      "INSERT INTO estoque (itemId, quantity, group, description, CPF, warehouse, comment) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [itemId, quantity, group, description, CPF, warehouse, comment]
    );
    console.log("Inserção bem-sucedida:", rows);
  } catch (error) {
    console.log(error)
  }
  res.status(201).send({
    message: 'Item adicionado ao banco de dados!',
    body: {
      funcionario: { itemId, quantity, group, description, CPF, warehouse, comment }
    },
  })
}