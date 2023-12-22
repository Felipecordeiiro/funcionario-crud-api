const mysql = require('mysql');
const dotenv = require('dotenv').config();

const connection = mysql.connection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.NAME
})

connection.conect

module.exports = connection