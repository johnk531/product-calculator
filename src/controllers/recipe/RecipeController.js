const RecipeModel = require("../../models/recipe/RecipeModel");

const RecipeController = {
    Create: async (req, res) => {
        const { nome, produtos, valor, _id_user } = req.body;

        try {
            const recipe_db = await RecipeModel.create({ nome, produtos, valor, _id_user });
            return res.status(200).json(recipe_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    Read: async (req, res) => {
        const { _id } = req.params;
        
        try {
            const recipe_db = await RecipeModel.findOne({ _id });
            return res.status(200).json(recipe_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    Update: async (req, res) => {
        const { _id, nome, produtos, valor, _id_user } = req.body;

        try {
            const recipe_db = await RecipeModel.findOneAndUpdate({ _id }, { nome, produtos, valor, _id_user });
            return res.status(200).json(recipe_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    Delete: async (req, res) => {
        const { _id } = req.body;

        try {
            const recipe_db = await RecipeModel.findOneAndDelete({ _id });
            return res.status(200).json(recipe_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    List: async (req, res) => {
        try {
            const recipe_db = await RecipeModel.find({});
            return res.status(200).json(recipe_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
}

module.exports = RecipeController;