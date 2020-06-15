'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const User = sequelize.define(
  'users',
  {
    firstName: {
      field: 'first_name',
      type: DataTypes.STRING
    },
    lastName: {
      field: 'last_name',
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE
    }
  },
  {
    timestamps: true
  }
);

User.associate = function (models) {
  // associations can be defined here
};

module.exports = User;
