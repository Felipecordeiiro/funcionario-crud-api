const db = require('../config/database');

exports.listEstoque = async (req, res) => {
  try {
    const { rows } = await db.query(` SELECT
                                      itemId, 
                                      quantity, 
                                      group, 
                                      description, 
                                      cpf, 
                                      warehouse, 
                                      comment FROM estoque ORDER BY itemId asc`);
    res.status(200).send(rows)
  } catch (error) {
    console.error('listEstoque', error)
  }

}

exports.addItem = async (req, res) => {
  const { itemId, quantity, group, description, cpf, warehouse, comment } = req.body;
  // CPF, C -> Consumível, P -> Peça, F -> Ferramenta
  try {
    const { rows } = await db.query(
      "INSERT INTO estoque (itemId, quantity, group, description, cpf, warehouse, comment) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [itemId, quantity, group, description, cpf, warehouse, comment]
    );
    console.log("Inserção bem-sucedida:", rows);
  } catch (error) {
    console.log(error)
  }
  res.status(201).send({
    message: 'Item adicionado ao banco de dados!',
    body: {
      item: { itemId, quantity, group, description, cpf, warehouse, comment }
    },
  })
}