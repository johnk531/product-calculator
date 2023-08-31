const router = require('express').Router();

const UserRoutes = require('./user/UserRoutes');
const ProductRoutes = require('./product/ProductRoutes');
const RecipeRoutes = require('./recipe/RecipeRoutes');

router.use(UserRoutes);
router.use(ProductRoutes);
router.use(RecipeRoutes);

module.exports = router;