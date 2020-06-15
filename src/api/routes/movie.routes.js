const router = require('express').Router();
const { MovieController } = require('../controllers');
const { JWTMiddleware } = require('../middlewares');

router
  .route('/movies')
  .get(JWTMiddleware.decode, MovieController.getMovies)
  .post(JWTMiddleware.decode, MovieController.createMovie);

router
  .route('/movies/:id')
  .get(JWTMiddleware.decode, MovieController.showMovie)
  .put(JWTMiddleware.decode, MovieController.updateMovie)
  .delete(JWTMiddleware.decode, MovieController.deleteMovie);

router.route('/movies/:id/restore').put(JWTMiddleware.decode, MovieController.restoreMovie);

module.exports = router;
