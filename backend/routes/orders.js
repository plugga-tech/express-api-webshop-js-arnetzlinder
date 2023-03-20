var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// router.post ('/add') Skapa en order

// router.get ('/') Hämta alla order

// router.get('/all') Hämta alla ordrar, key måste anges för att få tillgång till ordrar

//router.get('/all) Hämta alla ordrar med fel key (detta är för testets skull, ej kodas)

//router.post('/add') Skapa order för specifik user

//router.post('/user') Hämta orders för en viss user, skall misslyckas (401) utan key

module.exports = router;
