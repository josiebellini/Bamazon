# BAMAZON

I have built an Amazon-like storefront with MySQL, that opperates in the command line. The app takes in orders from customers and depletes stock from the store's inventory.

### View the App

Because this is a command line interface app, I have attached screenshots below so that you may view how this application runs. 

### BAMAZON Running

First, I created a MySQL Database called bamazon in the schema.sql file above. Then I created a Table inside of that database called products, which displayed the proper column titles. Then I inserted mock data.

Next I created a Node application displays all of the items available for sale when opened on the CLI. 

The app then prompts users with two messages:

   * The first asks them the ID of the product they would like to buy.
   * The second message asks how many units of the product they would like to buy.

<img width="601" alt="1" src="https://user-images.githubusercontent.com/28957688/31949716-a1dd3ece-b89f-11e7-9a78-e1b0d41e0b90.png">

Once the customer has placed the order, the application checks if your store has enough of the product to meet the customer's request. If not, the app informs the customer, and prevents the order from going through.

<img width="607" alt="3" src="https://user-images.githubusercontent.com/28957688/31949868-f18034cc-b89f-11e7-9460-4c32e3832356.png">

If the store does have enough of the product, we should fulfill the customer's order, which means:

   * SQL database updates to reflect the remaining quantity.
   * Once the update goes through, we show the customer the total cost of their purchase.

<img width="606" alt="2" src="https://user-images.githubusercontent.com/28957688/31949847-e4b4f66a-b89f-11e7-9508-5b3d9e09f823.png">
