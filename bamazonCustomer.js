var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon",


});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err
    showItems();
   
  })


function showItems() {
    connection.query("SELECT * FROM products", function(err, response) {
      if (err) throw err;
    
      console.log("---------------------------Available products:------------------------------ ");
      for (var i = 0; i < response.length; i++) {
        
        console.log("ID# " + response[i].item_id + " " + response[i].product_name + ", Category: " + response[i].department_name + ", Price: $" + response[i].price + ", Quantity Remaining: "  + response[i].stock_quantity);
        console.log("---------------------------------------------------------------------------");
      }
     
      questions();
    }); 
}

function questions () {
    inquirer.prompt([
        {
          type: "input",
          message: "What is the I.D of the item you want to buy? ",
          name: "Id"
        },
        {
          type: "input",
          message: "What will be the quantity?",
          name: "Quantity"
        }
      ])
     .then(function(inquirerResponse) {
 
        connection.query("SELECT * FROM products", function(err, response) {
            if (err) throw err;
       


            for (var i=0;i<response.length; i++) {



            if(inquirerResponse.Id==response[i].item_id) {
              
                 var x = inquirerResponse.Quantity;
                 var y = response[i].stock_quantity;
                 if (x<=y) {
                      
                    var calc = y-x;
                    console.log("\nOkay! " + calc + " " + response[i].product_name + "(s) remain.");
                    var bill = x*response[i].price;
                    console.log('Also, the bill is $'  + bill + " bucks.\n");
                   // console.log(typeof calc);
                     update(inquirerResponse.Id, calc);       //call the function update which deletes stuff from the table       
                    
                    }
                 else if (x>y) {
                     console.log('\n Insufficent Quantity! Buy Something Else!\n');
                     showItems();
                    }
                }
           
            }

        })
     })}



function update (ItemId, number) {
    connection.query("UPDATE products SET ? WHERE ?", 
    [
        {
          stock_quantity: number
        },
        {
          item_id: ItemId
        },
    ],    
        function(err, res) {
         // console.log(res.affectedRows + " products deleted!\n");
         
            showItems();
        }
        
      );
    }





    var check = function () {  //check to see if what you type is the correct id
      var hold = '';
      for (var f=0; f<response.length;f++) {
        if(inquirerResponse!==response[f].item_id) {
          hold = 'wrong id dude';
        }
      
    } 
    hold = 'wrong id \n' + showItems();
    return hold; 
    
    }
  //  check();