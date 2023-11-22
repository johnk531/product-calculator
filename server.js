const app = require('./app');

const connectToDatabase = require("./src/database/connect");
connectToDatabase();

app.listen(process.env.SERVER_PORT || 8080);