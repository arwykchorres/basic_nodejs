'use strict';

const Sequelize = require('sequelize');
const database = require('../config/config.js');

const sequelize = new Sequelize(database.development);

module.exports = sequelize;
