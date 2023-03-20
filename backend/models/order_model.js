const mongoose = require('mongoose');
const OrderSchema = mongoose.Schema;

const OrderModel = new OrderSchema ({
    products: [{
            productid: mongoose.Types.ObjectId,
            ref: 'product',
            quantity: Number
    }],
    user: {
        id: mongoose.Types.ObjectId,
        ref: 'user',
    }
});

module.exports = mongoose.model('order', OrderModel);