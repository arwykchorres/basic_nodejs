const movieModel = require('../../dal/models/movie');

class MovieService {
  /**
   * @typedef Movie
   * @property {integer} _id
   * @property {string} title
   * @property {string} description
   * @property {date} releaseDate
   * @property {timestamp} createdAt
   * @property {timestamp} updatedAt
   * @property {timestamp} deletedAt
   */

  /**
   * @returns {Movie[]} movies
   */
  static async all() {
    return await movieModel.findAll({ where: { deletedAt: null } });
  }

  /**
   *
   * @returns {Movie} movie
   */
  static async show(id) {
    return await movieModel.findOne({ where: { id } });
  }

  /**
   * @param  {Movie} movie
   */
  static async create(movie) {
    const { title, description, releaseDate } = movie;
    return await movieModel.create({ title, description, releaseDate });
  }

  static async update(id, movie) {
    const { title, description, releaseDate } = movie;
    return await movieModel.update({ title, description, releaseDate }, { where: { id } });
  }

  static async delete(id) {
    return await movieModel.update({ deletedAt: new Date() }, { where: { id } });
  }

  static async restore(id) {
    return await movieModel.update({ deletedAt: null }, { where: { id } });
  }
}

module.exports = MovieService;
