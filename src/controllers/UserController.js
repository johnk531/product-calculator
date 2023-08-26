const UserModel = require("../models/user/UserModel");

const UserController = {
    Create: async (req, res) => {
        const { username, email, password } = req.body;

        try {
            const user_db = await UserModel.create({ username, email, password });
            return res.status(200).json(user_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    Read: async (req, res) => {
        const { email } = req.params;
        
        try {
            const user_db = await UserModel.findOne({ email });
            return res.status(200).json(user_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    Update: async (req, res) => {
        const { username, email, password } = req.body;

        try {
            const user_db = await UserModel.findOneAndUpdate({ email }, { username, email, password });
            return res.status(200).json(user_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    Delete: async (req, res) => {
        const { email } = req.body;

        try {
            const user_db = await UserModel.findOneAndDelete({ email });
            return res.status(200).json(user_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    List: async (req, res) => {
        try {
            const user_db = await UserModel.find({});
            return res.status(200).json(user_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
}

module.exports = UserController;