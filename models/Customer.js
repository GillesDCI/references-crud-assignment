const {Schema, model} = require('mongoose');


const customerSchema = new Schema({
    
})


const Customer = model('Customer', customerSchema);

module.exports = Customer;