const mysql = require('mysql');

const conection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
})

conection.connect(function(err){
  if (err) throw err;
  console.log("Connected to bd")
});

module.exports = conection;