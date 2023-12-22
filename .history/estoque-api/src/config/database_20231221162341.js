const mysql = require('mysql');
const dotenv = require('dotenv').config();

const conection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.NAME
})

conection.connect(function(err){
  if (err) throw err;
  console.log("Connected to bd")
});

module.exports = conection;