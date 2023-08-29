const router = require('express').Router();

const UserRoutes = require('./user/UserRoutes');
const ProductRoutes = require('./product/ProductRoutes');

router.use(UserRoutes);
router.use(ProductRoutes);

module.exports = router;