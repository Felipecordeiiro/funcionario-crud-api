const db = require('../config/database');

// método responsável por add um novo produto;
exports.createUser = async(req, res) =>{
  const { userId, userName, email, password } = req.body;
  const { rows } = await db.query(
    "INSERT INTO estoque (userId, userName, email, password) VALUES ($1, $2, $3, $4)",
    [userId, userName, email, password]
  )
  res.status(200).send({
    message: 'Conta criada com sucesso!',
    body: {
      funcionario: { userId, userName, email, password }
    },
    )
  }
}