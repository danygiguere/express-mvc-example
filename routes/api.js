'use strict';

var express = require('express'),
    router = express.Router(),
    users_controller = require('../controllers/usersController');

//API ROUTES - THESE ROUTES ARE PREPENDED BY API/
router.get('/users/:id', users_controller.show);

module.exports = router;
