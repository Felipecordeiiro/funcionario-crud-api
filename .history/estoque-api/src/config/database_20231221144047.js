const mysql = require('mysql');

const conection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.envestoque
})

conection.connect(function(err){
  if (err) throw err;
  console.log("Connected to bd")
})