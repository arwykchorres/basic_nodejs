require('dotenv').config();

const config = require('./index');

const { dialect, dbName, host, port, username, password } = config.database;

module.exports = {
  development: {
    username,
    password,
    database: dbName,
    host,
    port,
    dialect
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  }
};
