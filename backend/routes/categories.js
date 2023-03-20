var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get ('/') Hämta alla kategorier

// router.post ('/add') Skapa kategori, key måste anges. Om ej key, ge tillbaka 401


module.exports = router;
