const mysql = require('mysql');

const conection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.
})

conection.connect(function(err){
  if (err) throw err;
  console.log("Connected to bd")
});

module.exports = conection;