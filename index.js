const dotenv = require("dotenv");
const express = require('express');

const app = express();

// middlewares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PATCH,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, Authorization, X-Requested-With, Content-Type, Accept');

    console.log(req.headers.authorization);

    next();
});

dotenv.config();

const connectToDatabase = require("./src/database/connect");
connectToDatabase();

const router = require("./src/routes");

// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//static
app.use('/static', express.static('public'));

//routes
app.use(router);

// rota inicial / endpoint
app.get('/', (req, res) => {
    res.status(200).send("<h1>Product Calculator - Back</h1><p>API for the systema</p>");
});

// custom 404
app.use((req, res, next) => {
    res.status(404).send("Route not found!")
})

// custom error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something is broken!')
})

// entregar uma porta
app.listen(process.env.SERVER_PORT);