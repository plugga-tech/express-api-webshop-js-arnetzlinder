const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema;

const CategoryModel = new CategorySchema ({
    name: String,

});

module.exports = mongoose.model('category', CategoryModel);