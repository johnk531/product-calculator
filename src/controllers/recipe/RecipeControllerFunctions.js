const ProductModel = require("../../models/product/ProductModel");

const RecipeControllerFunctions = {
    ReturnCostRecipe: async (req, res) => {
        try {
            const products = req.body.products;
            for (let i = 0; i < products.length; i++) {
                const product = await ProductModel.findOne({ _id : products[i]._id });
                products[i].nome = product.nome;
                products[i].valorQtd = RecipeControllerFunctions.ReturnValorQtd(parseInt(product[i].quantidade), parseFloat(product[i].valor));
            }
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    ReturnValorQtd: async (qtd, valor, qtdUsed) => {
        const valorQtd = (valor * qtdUsed) / qtd; 
        return valorQtd;
    }
}

module.exports = RecipeControllerFunctions;