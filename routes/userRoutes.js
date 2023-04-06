const express = require('express');
const userControllers = require('./../controllers/userControllers.js');
const auth = require('../middleware/auth');

const router = express.Router();

router
.route('/register')
.post(userControllers.createUser)

router
.route('/login')
.post(userControllers.login)

router
.route('/:id')
.get(auth, userControllers.getProfile)

module.exports = router;