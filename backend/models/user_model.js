const mongoose = require('mongoose');
const UserSchema = mongoose.Schema;

const UserModel = new UserSchema ({
    name: String,
    email: String,
    password: String,
    session: String
});

module.exports = mongoose.model('users', UserModel);
