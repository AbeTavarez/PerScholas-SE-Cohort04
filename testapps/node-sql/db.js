const mysql = require("mysql");

// connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "root",
  database: "my_db"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("DB Connected!");
});

connection.query('SELECT 1 + 1 AS solution', function (err, result) {
  if (err) throw err;
  console.log("Result: " + result);
});
