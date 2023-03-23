var express = require('express');
var router = express.Router();
const UserModel = require('../models/user_model');
const OrderModel = require('../models/order_model');
const ProductModel = require('../models/product_model');




// router.post ('/add') Skapa en order
router.post('/add', async (req, res) => {
  console.log(req.body);
  let user = await UserModel.findOne({session: req.session.id})
  let outOfStock = false;
  if (user === null) {
    // incorrect
    res.status(401).json("DU är inte inloggad")
  } else {
    let order = await OrderModel.create(req.body);
    console.log(order); // nån products array som frontend postat in, + user.id från ovan

    let products = req.body.products;

    products.forEach(async ({productId, quantity}) => {
      let product = await ProductModel.findById({_id: productId});
      console.log(product);
      if (product) {
        product.lager -= quantity;
        await product.save();
      }
    });

  //     if (product.lager > 0) {
  //       outOfStock = true;

    // ändra i alla products så att lagersaldot minskar
    // if (outOfStock) {
    //   res.status(200).json("Order lagd, men barasåruvet så var nån grej lite slut");
    
    // } else {

    //   res.status(200).json("Order lagd, allt fanns i lager!!!!1111!oneoneone")
    // }

  }
});

// router.get ('/') Hämta alla order

// router.get('/all') Hämta alla ordrar, key måste anges för att få tillgång till ordrar

//router.get('/all) Hämta alla ordrar med fel key (detta är för testets skull, ej kodas)

//router.post('/add') Skapa order för specifik user

//router.post('/user') Hämta orders för en viss user, skall misslyckas (401) utan key

module.exports = router;
