# references-crud-assignment
This exercise will allow you to recap what we've learned so far. 

## Assignment
Create a new Backend API fully from scratch

###  Install the following modules: 
+ mongoose
+ express
+ dotenv
+ cors

### 1. Set up your server
Set up the server.js and configure everything accordingly. Prepare already a models and routes folder. 
+ Set up the .env for mongodb
+ Connect the server to the database 
+ Configure folders 

### 2. Assignment
Build an API for order management. The following functionality is required: 

#### Task 1. Inserting customers 
Create a new `post` route which allows you to add a new customer into the database. 
Make sure the customer has a `firstname`, `lastname` and `email` in the customerschema.

#### Task 2. Updating customers by id 
Create a new `patch` route which allows you to update the customer by ID.  

#### Task 3. List customers
Create a new `get` route which allows you to get a list from all the customers. 
Use the `limit` and `skip` methods to paginate the results. 

#### Task 4 . Inserting orders
Create a new `post` route which allows you to create a new order into the database. 
Make sure there's a reference to the User who ordered the order.

#### Task 5. List orders
Create a new `get` route which allows you to fetch a list of all the orders in the system. 
Use the `limit` and `skip` methods to paginate the results. 

#### Task 6 List orders by Customer
Create a new `get` route which allows you to fetch a list of all the orders by customer. 


### 3. Bonus - adding inventory records
+ Inserting Inventory records
+ Check how many products are left in the inventory by product ID .
+ Update the inventory with inStock field -1 when order is sold. 

Each functionality will be one route with logic. You are free to organize it the way you like. 
Use the previous example projects as a base to build the above functionality. 






