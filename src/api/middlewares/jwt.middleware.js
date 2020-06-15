const jwt = require('jsonwebtoken');
const config = require('../../config');

class JWTMiddleware {
  static async decode(req, res, next) {
    try {
      const token = req.get('Authorization').slice('Bearer '.length);
      await jwt.verify(token, config.secret);
      next();
    } catch (error) {
      return next({ statusCode: 401, message: 'Not authorization' });
    }
  }
}

module.exports = JWTMiddleware;
