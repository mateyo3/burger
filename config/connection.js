var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3030,
  host: "localhost",
  user: "root",
  password: "Calamigos2015",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  console.log("localhost:" + PORT);
});


// Export connection for our ORM to use.
module.exports = connection;