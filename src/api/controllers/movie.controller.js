const { MovieService } = require('../services');

class MovieController {
  static async getMovies(req, res) {
    try {
      const movies = await MovieService.all();
      res.status(200).json({ movies });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async showMovie(req, res) {
    try {
      const { id } = req.params;
      const movie = await MovieService.show(id);
      res.status(200).json({ movie });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async createMovie(req, res) {
    try {
      const { title, description, releaseDate } = req.body;
      const movie = await MovieService.create({ title, description, releaseDate });
      res.status(201).json({ movie });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateMovie(req, res) {
    try {
      const { title, description, releaseDate } = req.body;
      const { id } = req.params;
      await MovieService.update(id, { title, description, releaseDate });
      res.status(200).json({ status: 'success' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteMovie(req, res) {
    try {
      const { id } = req.params;
      await MovieService.delete(id);
      res.status(200).json({ status: 'success' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async restoreMovie(req, res) {
    try {
      const { id } = req.params;
      await MovieService.restore(id);
      res.status(200).json({ status: 'success' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = MovieController;
