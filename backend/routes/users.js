var express = require('express');
var router = express.Router();
const crypto = require("crypto-js");
const mongoose = require('mongoose');

const UserModel = require('../models/user_model');



// router.get ('/') Hämta alla användare, skicka inte med lösenord
router.get('/', async(req, res) => {
  const users = await UserModel.find({},'name email').exec()
  res.send(users);
});

// router.post ('/') Hämta en specifik användare
router.post('/', async (req, res) => {
  const user = await UserModel.findById(req.body.id)
  res.send(user)
});


// router.post('/add') Lägg till en användare
router.post('/add', async (req, res) => {
  console.log(req.body)
  req.body.password = crypto.SHA3(req.body.password)
  console.log(req.body)
  let newUser = await UserModel.create(req.body)
  // let passwordToSave = await UserModel.create(crypto.SHA3(req.body.password).toString());
  // newUser.password = passwordToSave;
  // newUser.save()
  console.log(newUser)
  res.send(newUser)
});



// router.post('/login') Logga in en användare
router.post('/login', async (req,res) => {
  
  const user = await UserModel.findOne({ email: req.body.email, password: crypto.SHA3(req.body.password).toString()}).exec();
  if (user === null) {
    // incorrect
    res.status(401).json("Incorrect password or email")
  } else {
    // correct
    req.session.id = crypto.SHA3(Math.random().toString()).toString()
    //console.log("Setting session to " + req.session.id + " based on " + Math.random().toString())
    res.status(200).json(user)
    
    user.session = req.session.id;
    user.save()
  }
});

router.get('/checklogin', async (req,res) => {
  if (typeof req.session.id === 'undefined') {
    res.status(401).json("Du är inte inloggad")
    
  } else {
     let user = await UserModel.findOne({session: req.session.id})
      if (typeof user === 'undefined') {
        // incorrect
        res.status(401).json("Din session har gått ut")
      } else {
        res.status(200).json(user);
      }

  }
});




module.exports = router;
