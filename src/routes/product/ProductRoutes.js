const router = require('express').Router();

const ProductController = require('../../controllers/product/ProductController');

//Create product
router.post("/product/create", ProductController.Create);
//Read product
router.get("/product/read/:_id", ProductController.Read);
//Update product
router.put("/product/update", ProductController.Update);
//Delete product
router.delete("/product/delete", ProductController.Delete);
//List products
router.get("/product/list", ProductController.List);

module.exports = router;