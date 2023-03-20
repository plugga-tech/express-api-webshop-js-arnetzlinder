const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema;

const ProductModel = new ProductSchema ({
    name: String,
    description: String,
    price: Number,
    lager: Number,
    category: mongoose.Types.ObjectId,
    ref: 'category'
});

module.exports = mongoose.model('product', ProductModel);