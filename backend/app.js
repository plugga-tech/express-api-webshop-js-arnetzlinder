var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
let ordersRouter = require('./routes/orders');
let categoriesRouter = require('./routes/categories');
const mongoose = require('mongoose');

var app = express();

require("dotenv").config();

app.use(cors());

// async function init() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/susanne-arnetzlinder")
//     .then (() => console.log('databasen är igång'));
// }

// init();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
