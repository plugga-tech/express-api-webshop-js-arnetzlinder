var express = require('express');
var router = express.Router();
const CategoryModel = require('../models/category_model');


// router.get ('/') Hämta alla kategorier
router.get('/', async(req, res) => {
  const categories = await CategoryModel.find().exec()
  res.send(categories);
});

// router.post ('/add') Skapa kategori, key måste anges. Om ej key, ge tillbaka 401
router.post('/add', async (req, res) => {
  if (req.body.token === "1234key1234") {
      let newCategory = await CategoryModel.create(req.body);
      console.log(newCategory)
      res.send(newCategory)
  } else {
      res.status(401).json("Invalid token");
  }
});


module.exports = router;
