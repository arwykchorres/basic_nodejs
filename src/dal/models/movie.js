'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Movie = sequelize.define(
  'movies',
  {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    releaseDate: {
      field: 'release_date',
      type: DataTypes.DATE
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

Movie.associate = function (models) {
  // associations can be defined here
};

module.exports = Movie;
