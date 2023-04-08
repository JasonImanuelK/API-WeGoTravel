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
.get(auth("user"), userControllers.getProfile)

router
.route('/updateProfile/:id')
.put(auth("user"), userControllers.updateProfile)

module.exports = router;