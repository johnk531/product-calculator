const dotenv = require("dotenv");
const express = require('express');

class AppController{
    constructor() {
        this.express = express();

        dotenv.config();
    
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(
            express.urlencoded({
                extended: true,
            }),
        );
        this.express.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PATCH,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        
            function checkReferer(req) {
                const url = process.env.URL_PROD;
                let bool = false;
                if (typeof req.get('origin') != 'undefined' && req.get('origin').includes(url)) {
                    bool = true;
                } else if (typeof req.get('referer') != 'undefined' && req.get('referer').includes(url) && !bool) {
                    bool = true;
                } else if (typeof req.get('host') != 'undefined' && req.get('host').includes(url) && !bool) {
                    bool = true;
                } else if (req.path.includes('/static/')) {
                    bool = true
                }
                return bool;
            }
            if ( checkReferer(req) ) {
                return next();
            }else {
                return res.status(403).send('Acesso não autorizado!');
            }
        });
    }

    routes(){
        this.express.get('/', (req, res) => {
            res.status(200).send("<h1>Product Calculator - Back</h1><p>API for the system</p>");
        });
        this.express.use(require("./src/routes"));
    }

    static(){
        this.express.use('/static', express.static('public'));
    }
}

module.exports = new AppController().express;