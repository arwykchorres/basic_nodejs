const { UserService } = require('../services');

class UserController {
  static async createUser(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const errors = {};
      if (!firstName) {
        errors.firstName = 'Your first name is required.';
      }

      if (!lastName) {
        errors.lastName = 'Your last name is required.';
      }

      if (!email && email.length < 3) {
        errors.email = 'Your password must be at least 3 characters.';
      }
      if (!password && password.length < 8) {
        errors.password = 'You must specify a name of at least 3 characters.';
      }

      if (Object.keys(errors).length > 0) {
        res.status(400).json(errors);
        return;
      }

      await UserService.create({
        firstName,
        lastName,
        email,
        password
      });

      res.status(201).send({
        status: 'success'
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async logIn(req, res) {
    const { email, password } = req.body;
    try {
      const token = await UserService.logIn({ email, password });
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;
