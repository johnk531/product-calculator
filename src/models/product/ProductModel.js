const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({}, { strict: false });
const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;