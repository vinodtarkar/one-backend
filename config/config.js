const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.NODE_ENV)
module.exports = {
    development: {
        dialect: process.env.DB_CONNECTION,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    },
    timezone: '+05:30'
};