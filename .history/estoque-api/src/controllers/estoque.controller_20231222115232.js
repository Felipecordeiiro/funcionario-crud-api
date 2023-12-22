const db = require('../config/database');

exports.listEstoque = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM estoque");
    res.status(200).send(rows)
    res.status(201).send({}
      body: {
        item: { itemId, quantity, groupe, description, cpf, warehouse, comment },
      })
  } catch (error) {
    console.error('listEstoque', error);
    res.status(500).send({
      message: "Ocorreu um erro"
    });
  }
}

exports.addItem = async (req, res) => {
  const { itemId, quantity, groupe, description, cpf, warehouse, comment } = req.body;
  // CPF, C -> Consumível, P -> Peça, F -> Ferramenta
  const columns = [quantity, groupe, description, cpf, warehouse, comment]
  try {
    const { rows } = await db.query(
      "INSERT INTO estoque (quantity, groupe, description, cpf, warehouse, comment) VALUES (?, ?, ?, ?, ?, ?)",
      columns
    );
    console.log("Inserção bem-sucedida:", columns);
  } catch (error) {
    console.log(error)
  }
  res.status(201).send({
    message: 'Item adicionado ao banco de dados!',
    body: {
      item: { itemId, quantity, groupe, description, cpf, warehouse, comment }
    },
  })
}