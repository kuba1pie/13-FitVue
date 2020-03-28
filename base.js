var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql45.lh.pl",
  user: "serwer53641",
  password: "zaq12wsx",
  database: "serwer53641_fitvue"
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM `dish` ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});