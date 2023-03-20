var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get ('/') Hämta alla produkter

// router.get ('/') Hämta en specifik produkt. Utan token skall anropet misslyckas (401)

// router.get ('/category') Hämta alla produkter i en specifik kategori

// router.post ('/add') Skapa en produkt

module.exports = router;
