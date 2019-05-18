const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require('cli-table');
const colors = require('colors');
const divider = "------------------------------------------------------------------------------------------"

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

connection.connect(function (err) {
  if (err) throw err;

  var table = new Table({
    head: ['Item ID', 'Product Name', 'Department Name', 'Price', 'Quantity'],
    style: {
      head: ['green']
    },
  });
  //Select all customers and return the result object:
  connection.query("SELECT * FROM products", function (err, rows, fields) {
    if (err) throw err;
    for (var i = 0; i < rows.length; i++) {
      //push each row to our formatted table
      table.push([rows[i].item_id, rows[i].product_name, rows[i].department_name, rows[i].price, rows[i].stock_quantity]);
    }
    //display table to console
    console.log(table.toString() + "\n")
    promptuser()

  });

});



//function to ask user which item and what quantity they want to buy
function promptuser() {
  inquirer
    .prompt([{
        name: "itemid",
        message: "Please type the Item ID of the product you would like to purchase."
      },
      {
        name: "quantitytobuy",
        message: "How many units of the product would you like to buy?"
      }
    ])
    .then(res => {
      connection.query("SELECT * FROM products WHERE item_id =?", [res.itemid], function (err, rows, fields) {
        if (err) throw err;

        if (rows[0].stock_quantity < parseInt(res.quantitytobuy)) {
          console.log("Insufficient Quantity!!! Try again")
          promptuser()
          console.log("passed check")
        } else {
          //if purchase is legal then we make a variable to hold new updated inventory 
          let newstockq = rows[0].stock_quantity - parseInt(res.quantitytobuy)
          //now we update our SQL table to reflect the purchase
          connection.query("UPDATE products SET stock_quantity =? WHERE item_id =?", [newstockq, res.itemid], function (err, rows, fields) {
            if (err) throw err;
            
            console.log(newstockq)

          })

          //update table etc...
        }
        // Use user feedback for... whatever!!
      });
    })
}