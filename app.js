const express = require("express");
const app = express();
const router = express.Router();

const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const dbSequelize = require('./models/psql') ;

dotenv.config();

const APPNAME = process.env.APP_NAME || 'Node'
const APP_ENV = process.env.APP_ENV || 'development'
const HOST = process.env.APP_URL || '127.0.0.1'
const PORT = process.env.APP_PORT || 4000


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send({
        success: true,
        subject: 'Test Response',
        message: `Welcome to ${APPNAME} , Application Environment ${APP_ENV}`
    })
});

//  Connect all our routes to our application
require('./routes/userRoute')(router);
app.use("/api/v1", router);


app.listen(PORT, HOST, (err, res) => {
    if (err) {
        console.log(`\n Server error on http://${HOST}:${PORT}/ \n`)
    } else {
        console.log('\n Up and running --- This is our one.com Backend Service.')

        console.log('\n/*\n|--------------------------------------------------------------------------')
        console.log(`|     Server up \n|     Running on http://${HOST}:${PORT}/`)
        console.log('|--------------------------------------------------------------------------\n*/\n')

        console.log('+--------------------+-------------------------+--------------------------+')
        console.log('|     App Name         Environment         App Start Time                  |')
        console.log('+--------------------+-------------------------+--------------------------+')
        console.log('|                                                                         |')
        console.log(`|  ${APPNAME}     ${APP_ENV.toUpperCase()}      ${new Date().toLocaleString()}`)
        console.log('|                                                                         |')
        console.log('+--------------------+-------------------------+--------------------------+\n')

        dbSequelize.sequelize.authenticate().then(function (err) {
            console.log('\n Database Connection has been established successfully.\n');
        }).catch(function (err) {
            console.log('\nUnable to connect to the database:', err, '\n');
        });

    }
})

