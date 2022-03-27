'use strict';
const { db_host, db_user, db_pass, db_name } = require('./config');
module.exports = {
  development : {
    client: 'mysql2',
    connection: {
      host: db_host,
      user: db_user,
      password: db_pass,
      database: db_name,
    },
    debug: true
  }
};