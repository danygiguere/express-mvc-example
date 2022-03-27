'use strict';

var express = require('express'),
    router = express.Router(),
    pages_controller = require('../controllers/pagesController'),
    middlewares = require('../middlewares'),
    encryptCookies = middlewares.encryptCookies,
    verifyCsrfToken = middlewares.verifyCsrfToken;

//PAGES ROUTES
router.get('/', [encryptCookies, verifyCsrfToken], pages_controller.welcome);

module.exports = router;


