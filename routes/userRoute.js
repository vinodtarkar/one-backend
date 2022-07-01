'use strict';

/**
** @author : Vinod Kumar Tarkar
** @description : user routes
** @filename : userRoute.js
** @created : 30-Jun-2022
**/

const userCtrl = require("../controllers/userCtrl");
const {authenticateJWT , generateToken} = require("../helpers/jwt-authentication")

module.exports = function (router) {
    router.get('/test', userCtrl.test);
    
}