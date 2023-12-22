const db = require('../config/database');

// método responsável por add um novo produto;
exports.createUser = async(req, res) =>{
  const { userId, userName, email, password } = req.body;
  const { rows } = await db.query(
    "INSERT INTO estoque (userName, email, password) VALUES ($1, $2, $3)",
      [userId, userName, email, password]
  )
  res.status(201).send({
    message: 'Conta criada com sucesso!',
    body: {
      funcionario: { userId, userName, email, password }
    },
  })
}