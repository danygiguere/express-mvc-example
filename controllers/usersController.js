"use strict";

var User = require('../models/user');

exports.show = async function(req, res) {
    var id = req.params.id;
    const user = await User.query().findById(id);
    res.json(user);
};