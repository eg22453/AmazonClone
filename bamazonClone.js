var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var colors = require('colors');

const divider ="------------------------------------------------------------------------------------------"

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_db"
});

console.log("\n Hello! Welcome to Bamazon!! Below you will see the products that are currently for sale. \n")
console.log(divider)

connection.connect(function(err) {
  if (err) throw err;

  var table = new Table({
    head: ['Item ID', 'Product Name', 'Department Name', 'Price', 'Quantity'],
    style: {head: ['green']},
});
  //Select all customers and return the result object:
  connection.query("SELECT * FROM products \G", function (err, rows, fields) {
    if (err) throw err;
    for (var i =0; i <rows.length; i++){
      //push each row to our formatted table
      table.push([rows[i].item_id, rows[i].product_name, rows[i].department_name, rows[i].price, rows[i].stock_quantity]);
    }
    //display table to console
    console.log(table.toString())
  });
  connection.end();
});




// inquirer
//   .prompt([{
//     name: "response",
//     message: "Would you like to [POST] an auction or [BID] on an auction?"
//   }])
//   .then(res => {
//     console.log(res.response)
//     // Use user feedback for... whatever!!
//   });