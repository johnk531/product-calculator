const UserModel = require("../../models/user/UserModel");
const crypto = require("crypto");

const UserController = {
    Create: async (req, res) => {
        const { username, email, password } = req.body;

        try {
            const encryptPassword = await UserController.encryptPassword(password);
            const user_db = await UserModel.create({ username, email, password: encryptPassword });
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
    signIn: async (req, res) => {
        const { email, password } = req.body;
        
        try {
            const user_db = await UserModel.findOne({ email });

            if(user_db === null){
                return res.status(200).json("E-mail não cadastrado!");
            }else{
                const decryptPassword = await UserController.decryptPassword(user_db.password);
                if(decryptPassword === password)
                    return res.status(200).json("Usuário logado!");
                else
                    return res.status(200).json("Senha inválida!");                
            }
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    encryptPassword: async (password) => {
        const TYPE = process.env.ENCRYPT_TYPE;
        const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPT_SECRET, 'base64');
        const IV_LENGTH = 16;

        let iv = crypto.randomBytes(IV_LENGTH);
        let cipher = crypto.createCipheriv(process.env.ENCRYPT_ALGORITHM, Buffer.from(ENCRYPTION_KEY, TYPE), iv);
        let encrypted = cipher.update(password);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return iv.toString(TYPE) + ':' + encrypted.toString(TYPE);
    },
    decryptPassword: async (password) => {
        const TYPE = process.env.ENCRYPT_TYPE;
        const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPT_SECRET, 'base64');

        let textParts = password.split(':');
        let iv = Buffer.from(textParts.shift(), TYPE);
        let encryptedText = Buffer.from(textParts.join(':'), TYPE);
        let decipher = crypto.createDecipheriv(process.env.ENCRYPT_ALGORITHM, Buffer.from(ENCRYPTION_KEY, TYPE), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
}

module.exports = UserController;