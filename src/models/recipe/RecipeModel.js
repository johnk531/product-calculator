const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({}, { strict: false });
const RecipeModel = mongoose.model('recipes', recipeSchema);

module.exports = RecipeModel;