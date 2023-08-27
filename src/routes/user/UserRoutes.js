const router = require('express').Router();

const UserController = require('../../controllers/UserController');

//Create user
router.post("/user/create", UserController.Create);
//Read user
router.get("/user/read/:email", UserController.Read);
//Update user
router.put("/user/update", UserController.Update);
//Delete user
router.delete("/user/delete", UserController.Delete);
//List users
router.get("/user/list", UserController.List);
//Signin
router.get("/user/signin", UserController.signIn);

module.exports = router;