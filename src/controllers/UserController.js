const UserModel = require("../models/user/UserModel");

const UserController = {
    Create: async (req, res) => {
        try {
            const user_db = await UserModel.create({
                username: req.body.username,
                password: req.body.password,
            });
            return res.status(200).json(user_db);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
}

module.exports = UserController;