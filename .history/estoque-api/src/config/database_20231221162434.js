const mysql = require('mysql');
const dotenv = require('dotenv').config();

const conection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.NAME
})

conection.on('connection', (stream))