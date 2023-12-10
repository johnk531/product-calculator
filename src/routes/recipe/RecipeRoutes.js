const router = require('express').Router();

const RecipeController = require('../../controllers/recipe/RecipeController');
const RecipeControllerFunctions = require('../../controllers/recipe/RecipeControllerFunctions');

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

//Calc cost of recipe
router.post("/recipe/return-cost", RecipeControllerFunctions.ReturnCostRecipe);

module.exports = router;