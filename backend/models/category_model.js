const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema;

const CategoryModel = new CategorySchema ({
    _id: String,
    name: String,

});

module.exports = mongoose.model('category', CategoryModel);