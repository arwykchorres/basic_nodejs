const userModel = require('../../dal/models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');

class User {
  constructor({ email, password } = {}) {
    this.email = email;
    this.password = password;
  }

  toJson() {
    return { email: this.email };
  }

  async comparePassword(plaintText) {
    return await bcrypt.compare(plaintText, this.password);
  }

  encoded() {
    return jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4,
        ...this.toJson()
      },
      config.secret
    );
  }

  static async decoded(tokenJWT) {
    return jwt.verify(tokenJWT, config.secret, (error, res) => {
      if (error) return { error };
      return tokenJWT;
    });
  }

  static async hashPassword(password) {
    return await bcrypt.hash(password, 10);
  }
}

class UserService {
  static async create(userData) {
    const { firstName, lastName, email, password } = userData;
    return await userModel.create({
      firstName,
      lastName,
      email,
      password: await User.hashPassword(password)
    });
  }

  static async logIn(userData) {
    const { email, password } = userData;
    const userQuery = await userModel.findOne({ where: { email: email } });
    if (!userQuery) {
      throw new Error('Make sure your email is correct.');
    }
    const user = new User(userQuery);
    if (!(await user.comparePassword(password))) {
      throw new Error('Make sure your password is correct.');
    }
    return await user.encoded();
  }
}

module.exports = UserService;
