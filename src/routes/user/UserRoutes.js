const router = require('express').Router();

const UserController = require('../../controllers/UserController');

//Create user
router.post("/user/create", UserController.Create);

module.exports = router;