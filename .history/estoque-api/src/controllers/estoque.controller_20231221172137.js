const db = require('../config/database');

// método responsável por add um novo produto;
exports.createUser = async(req, res) =>{
  const { userId, userName, email, password } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO estoque (userName, email, password) VALUES ($1, $2, $3)",
      [userName, email, password]
    );
    console.log("Inserção bem-sucedida:", rows);
  } catch (error) {
    console.error("Erro na inserção:", error);
  }
  const { rows } = await db.query(
    "INSERT INTO estoque (userName, email, password) VALUES ($1, $2, $3)",
      [userName, email, password]
  )
  res.status(201).send({
    message: 'Conta criada com sucesso!',
    body: {
      funcionario: { userId, userName, email, password }
    },
  })
}