var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const UserModel = require('../models/user_model');
const OrderModel = require('../models/order_model');
const ProductModel = require('../models/product_model');




// router.post ('/add') Skapa en order
router.post('/add', async (req, res) => {
  console.log(req.body);


  if (req.session.id === null) {
    res.status(401).json("Du är inte inloggad")
    
  } else {
    let user = await UserModel.findOne({session: req.session.id})
    if (user === null) {
       // incorrect
      res.status(401).json("Din session har gått ut")
    } else {

      let outOfStock = false;
      req.body.user = user._id
      let order = await OrderModel.create(req.body);
      console.log(order); // nån products array som frontend postat in, + user.id från ovan
      let products = req.body.products;

      products.forEach(async ({productId, quantity}) => {
        let product = await ProductModel.findById({_id: productId});
        console.log(product);
        if (product) {
          product.lager -= quantity;
          await product.save();
          if (product.lager < 0) {
            outOfStock = true;
          }
        }
      });

      if (outOfStock) {
        res.status(200).json("Order lagd, men barasåruvet så var nån grej lite slut");
      } else {
        res.status(200).json("Order lagd, allt fanns i lager!!!!1111!oneoneone")
      }

    
       
    }

  }

});



// router.get('/all') Hämta alla ordrar, key måste anges för att få tillgång till ordrar
router.get('/all/:token', async function(req, res) {
  if (req.params.token === process.env.API_KEY) {
    const orders = await OrderModel.find()
    res.send(orders);



  } else {
    res.status(401).json("No token specified")

  }
})


//router.get('/all) Hämta alla ordrar med fel key (detta är för testets skull, ej kodas)

//router.post('/add') Skapa order för specifik user

//router.post('/user') Hämta orders för en viss user, skall misslyckas (401) utan key
router.post('/user', async function(req, res) {
  if (req.body.token === process.env.API_KEY) {
    const orders = await OrderModel.find({user: req.body.user})
    res.send(orders);
  } else {
    res.status(401).json("No token specified")


  }
})


// get orders for the logged in user
router.get('/', async (req, res) => {
  if (req.session.id === null) {
    res.status(401).json("Du är inte inloggad")
    
  } else {
     let user = await UserModel.findOne({session: req.session.id})
      if (user === null) {
        // incorrect
        res.status(401).json("Din session har gått ut")
      } else {
        let order = await OrderModel.find({ user: user._id }).populate({path: 'products.productId', model: 'product'}).populate('user');
        console.log(order); // nån products array som frontend postat in, + user.id från ovan
        res.status(200).json(order);
       
      }

  }


})


module.exports = router;
