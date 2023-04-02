var mongoose = require("mongoose");

/*

productId should be a string and should be required.

value should be a number and should be required.

quantity should be a number and should be required.

*/


var inventorySchema = mongoose.Schema({
    //Write your Code here
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
