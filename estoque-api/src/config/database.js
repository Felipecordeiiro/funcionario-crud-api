const mysql = require('mysql');
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.NAME
})

connection.connect((error) => {
  if(error) throw error;
  console.log('DB conected');
})

module.exports = connection