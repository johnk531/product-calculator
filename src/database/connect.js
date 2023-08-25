const mongoose = require('mongoose');

const connectToDatabase = async () => {
    const user = encodeURIComponent(process.env.MONGODB_USER);
    const pass = encodeURIComponent(process.env.MONGODB_PASS);

    const uri = `mongodb+srv://${user}:${pass}@product-calculator.tphyp0g.mongodb.net/product-calculator?retryWrites=true&w=majority`;

    await mongoose.connect(
        uri,
        (error)=>{
            if(error){
                return console.log("An error occurred while connecting to the DB: ", error);
            }

            return console.log("Database connection successful!");
        }
    );
}

module.exports = connectToDatabase;