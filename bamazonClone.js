var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "greatbay_db"
  });
  
  inquirer
    .prompt([{
        name: "response",
      message: "Would you like to [POST] an auction or [BID] on an auction?"
    }
    ])
    .then(res => {
        console.log(res.response)
      // Use user feedback for... whatever!!
    });
  
