const router = require('express').Router();
const UserController = require('../controllers/user.controller');

router.post('/login', UserController.logIn);
router.route('/register').post(UserController.createUser);

module.exports = router;
