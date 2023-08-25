const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({}, { strict: false });
const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;