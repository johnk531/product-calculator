const router = require('express').Router();

const UserRoutes = require('./user/UserRoutes');

router.use(UserRoutes);

module.exports = router;