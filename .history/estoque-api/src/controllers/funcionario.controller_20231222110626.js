const db = require('../config/database');

// método responsável por add um novo produto;
exports.createUser = async(req, res) =>{
  const { userId, userName, email, password } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO funcionario (userName, email, password) VALUES (?, ?, ?)",
      [userName, email, password]
    );
    console.log("Inserção bem-sucedida:", rows);
  } catch (error) {
    console.error("Erro na inserção:", error);
  }
  res.status(201).send({
    message: 'Conta criada com sucesso!',
    body: {
      funcionario: { userId, userName, email, password }
    },
  })
}