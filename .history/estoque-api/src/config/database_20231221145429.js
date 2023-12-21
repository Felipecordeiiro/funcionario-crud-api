const mysql = require('mysql');

const conection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_HOST,
  password: '',
})

conection.connect(function(err){
  if (err) throw err;
  console.log("Connected to bd")
});

module.exports = conection;