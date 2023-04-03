var express = require('express');
const ProductModel = require('../models/product_model');
var router = express.Router();

require("dotenv").config();

// router.get ('/') Hämta alla produkter
router.get('/', async function(req, res, next) {
    const products = await ProductModel.find()
    res.send(products);
})

// router.get ('/') Hämta en specifik produkt. Utan token skall anropet misslyckas (401)
router.get('/:id', async function(req, res, next) {

    const product = req.params.id;
    const productFound = await ProductModel.findOne({ _id: product});
    try {
        if (productFound.id === product) {
            res.status(200).send(productFound);
        } else {
            res.status(400).json("Produkten finns ej");
        }
    } catch (err) {
        res.status(500).json(err.message + "Kan ej finna produkten")
    }
});

// router.get ('/category') Hämta alla produkter i en specifik kategori
router.get('/category/:id', async function(req, res, next) {
    const products = await ProductModel.find({ category: req.params.id})
    res.send(products);
})

// router.post ('/add') Skapa en produkt
router.post('/add', async (req, res) => {
    console.log('APIKEY is: ' + (process.env.API_KEY))
    if (req.body.token === process.env.API_KEY) {
        let newProduct = await ProductModel.create(req.body);

        console.log(newProduct)
        res.send(newProduct)
    } else {
        res.status(401).json("Invalid token");
    
    }
  });

module.exports = router;
