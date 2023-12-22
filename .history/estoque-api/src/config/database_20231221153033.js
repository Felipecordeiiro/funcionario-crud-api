const mysql = require('mysql');

const conection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASS,
})

conection.connect(function(err){
  if (err) throw err;
  console.log("Connected to bd")
});

module.exports = conection;