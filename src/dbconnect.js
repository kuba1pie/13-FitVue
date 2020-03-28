const db_info = require("../private/dbinfo")
let mysql = require("mysql")

let con = mysql.createConnection({
	host: db_info.db_host,
	user: db_info.db_user,
	password: db_info.db_password,
	database: db_info.db_database,
})

con.connect(function (err) {
	if (err) throw err
	console.log("Connected to the " + db_info.db_database + " database!")
})