const mysql = require('mysql');
const dotenv = require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.NAME
})

connection.on('connect', (con) => {
  console.log('bd conected')

  con.on('error', function (err) {
    console.error(new Date(), 'MySQL error', err.code);
  });
  con.on('close', function (err) {
    console.error(new Date(), 'MySQL close', err);
  });
})

module.exports = conection