const db = require('../config/database');

// método responsável por add um novo produto;
exports.addProduct = async(req, res) =>{
  const { userId, userName, email, password } = req.body;
  const { rows }
}