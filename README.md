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

Once the customer has placed the order, the application checks if your store has enough of the product to meet the customer's request. If not, the app informs the customer, and prevents the order from going through.

If the store does have enough of the product, we should fulfill the customer's order, which means:

   * SQL database updates to reflect the remaining quantity.
   * Once the update goes through, we show the customer the total cost of their purchase.

