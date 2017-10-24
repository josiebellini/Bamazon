


//Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});


//Functions
function displayAll() {
    //show all header topics from database
    connection.query('SELECT * FROM products', function(error, response) {
        if (error) { console.log(error) };
        var displayTable = new Table({
            //give a display value to the categories
            head: ['ID', 'Product Name', 'Category', 'Price', 'Quantity'],
            //set widths of columns
            colWidths: [5, 16, 14, 12, 10]
        });
        //for each row of the loop push data to table
        for (i = 0; i < response.length; i++) {
            displayTable.push(
                [response[i].item_id, response[i].product_name, response[i].department_name, '$' + response[i].price, response[i].stock_quantity]
            );
        }
        //log the completed table to console
        console.log(displayTable.toString());
        optionToBuy();
    });


}; //end displayAll
function optionToBuy() {
    //get item ID and desired quantity from user. Pass to purchase from Database
    inquirer.prompt([

        {
            name: "item_id",
            type: "input",
            message: "What is the ID of the item you wish to purchase?"
        }, {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
        },

    ]).then(function(answers) {
        //set user input variables, pass variables as parameters.
        var quantityDesired = answers.quantity;
        var idDesired = answers.item_id;
        purchaseFromDatabase(idDesired, quantityDesired);
    });

}; //end optionToBuy

function purchaseFromDatabase(id, quantityNeeded) {
    //check quantity of desired purchase. Minus quantity of the itemID from database if possible. Else inform user "Quantity desired not in stock" 
    connection.query('SELECT * FROM products WHERE item_id = ' + id, function(error, response) {
        if (error) { console.log(error) };

        //if in stock
        if (quantityNeeded <= response[0].stock_quantity) {
            //calculate cost
            var totalCost = response[0].price * quantityNeeded;
            //tell user
            console.log("Your product is in stock! Please find your purchase summary:");
            console.log("Your total cost for " + quantityNeeded + " " + response[0].product_name + " is $" + totalCost + ". Thank you for shopping with BAMAZON!");
            //update database quantity
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + quantityNeeded + ' WHERE item_id = ' + id);
        } 
        //if not in stock
        else {
            console.log("We are sorry, there aren't enough " + response[0].product_name + " to fulfill your request.");
        };
        displayAll();
    });

}; //end purchaseFromDatabase

displayAll();