const ProductModel = require("../../models/product/ProductModel");

const ProductController = {
    Create: async (req, res) => {
        const { nome, marca, quantidade, tipoquantidade, valor, _id_user } = req.body;

        try {
            const product_db = await ProductModel.create({ nome, marca, quantidade, tipoquantidade, valor, _id_user });
            return res.status(200).json(product_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    Read: async (req, res) => {
        const { _id } = req.params;
        
        try {
            const product_db = await ProductModel.findOne({ _id });
            return res.status(200).json(product_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    Update: async (req, res) => {
        const { _id, nome, marca, quantidade, tipoquantidade, valor, _id_user } = req.body;

        try {
            const product_db = await ProductModel.findOneAndUpdate({ _id }, { nome, marca, quantidade, tipoquantidade, valor, _id_user });
            return res.status(200).json(product_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    Delete: async (req, res) => {
        const { _id } = req.body;

        try {
            const product_db = await ProductModel.findOneAndDelete({ _id });
            return res.status(200).json(product_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    List: async (req, res) => {
        try {
            const product_db = await ProductModel.find({});
            return res.status(200).json(product_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
}

module.exports = ProductController;