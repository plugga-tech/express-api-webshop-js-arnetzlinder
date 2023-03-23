const mongoose = require('mongoose');
const OrderSchema = mongoose.Schema;

const OrderModel = new OrderSchema ({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
    },
    products: [{
        productId: {
        type: mongoose.Types.ObjectId,
        ref: 'products'
        },
        quantity: Number
}]
});

module.exports = mongoose.model('orders', OrderModel);