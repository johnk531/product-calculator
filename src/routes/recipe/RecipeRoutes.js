const router = require('express').Router();

const RecipeController = require('../../controllers/recipe/RecipeController');

//Create recipe
router.post("/recipe/create", RecipeController.Create);
//Read recipe
router.get("/recipe/read/:_id", RecipeController.Read);
//Update recipe
router.put("/recipe/update", RecipeController.Update);
//Delete recipe
router.delete("/recipe/delete", RecipeController.Delete);
//List recipes
router.get("/recipe/list", RecipeController.List);

module.exports = router;