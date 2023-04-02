const Inventorys   = require("../models/inventory.js");
const { valid } = require("joi");

/*

If the operation in the payload is "add," we need to increase the quantity of the given productId as mentioned. 
If the operation is "subtract," we need to decrease the quantity of the given productId. 
It is certain that the given productIds will always exist.

If any of the operations in the payload are not feasible, such as the quantity of any product going negative,
then we need to roll back the complete process.


Example: 

Initial database with Product id and quantity only mention

ProductId      Qnt
23              5
21              2
124             34


1 . 

Request Payload

payload = [
                {productId:23,quantity:4,operation:”add”},
                {productId:21,quantity:1,operation:”subtract”}
            ]

Response : 

200 Status

{
  status: 'success',
  data: [
    {
      _id: 'xyz1',
      productId: '23',
      value: 450,
      quantity: 9,
    },
    {
      _id: 'xyz2',
      productId: '21',
      value: 451,
      quantity: 1,
    },
    {
      _id: 'xyz3',
      productId: '124',
      value: 452,
      quantity: 34,
    }
  ]
}


2. 

Request Payload

payload = [
                {productId:23,quantity:4,operation:”add”},
                {productId:21,quantity:3,operation:”subtract”}
            ]

Response : 

{ status: 'fail', error: 'Quantity of some products went negeative' }

database: 

ProductId      Qnt
23              5
21              2
124             34

Operation should be rollback as after subtracting 3 from ProductId 21 the quantity of product goes Negeative.

*/

const modifyinventory =async (req, res) => {

    const payload  = req.body.payload;
    
    //Write your Code here

}

module.exports = { modifyinventory };