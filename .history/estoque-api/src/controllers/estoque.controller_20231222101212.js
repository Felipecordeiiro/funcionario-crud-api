const db = require('../config/database');

exports.estoque = async (req, res) => {
  const { itemId, quantity, group, description, CPF, warehouse, comment } = req.body;
  // CPF, C -> Consumível, P -> Peça, F -> Ferramenta

  try {
    const { rows } = await db.query(
      "INSERT INTO funcionario (itemId, quantity, group, description, CPF, warehouse, comment) VALUES (?, ?, ?)",
      [itemId, quantity, group, description, CPF, warehouse, comment]
    );
    console.log("Inserção bem-sucedida:", rows);
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