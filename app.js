'use strict';

require('dotenv').config();

const express = require('express'),
    app = express(),
    path = require('path'),
    handlebars = require('express-handlebars'),
    middlewares = require('./middlewares'),
    { port } = require('./config');

//register the web template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

//register the middlewares that will apply to all the app
app.use(middlewares.app);

//register the route files
app.use('/api', require('./routes/api.js'));
app.use('/', require('./routes/web.js'));

//register the public folder
app.use(express.static(path.join(__dirname, 'public')));

//start the app
app.listen(port, function () {console.log('application running on http://localhost:' + port)});


