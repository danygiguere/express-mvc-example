'use strict';
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    env_name: process.env.ENV_NAME,
    port: process.env.PORT,
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS
};