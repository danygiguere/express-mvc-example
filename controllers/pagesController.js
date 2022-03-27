'use strict';

exports.welcome = async function(req, res) {
    res.render('welcome.handlebars',
        {
            layout: 'app',
            title: 'Welcome page',
            body: {
                title: 'Sandbox',
                message: 'Welcome to the Sandbox project'
            }
        });
};
