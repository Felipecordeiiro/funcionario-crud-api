const mysql = require('mysql');
const dotenv = require('dotenv').config();

const conection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.NAME
})

conection.on('connect', (stream) => {
  console.log('bd conected')

  connection.on('error', function (err) {
    console.error(new Date(), 'MySQL error', err.code);
  });
  connection.on('close', function (err) {
    console.error(new Date(), 'MySQL close', err);
  });
})

module.exports = {
  query: (text, params) => conection.query(text, params)
}