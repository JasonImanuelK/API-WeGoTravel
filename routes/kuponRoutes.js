const express = require('express');
const kuponControllers = require('./../controllers/kuponControllers.js');
const auth = require('../middleware/auth');

const router = express.Router();

router
.route('/createKupon')
.post(auth, kuponControllers.createKupon)

router
.route('/lihatKupon')
.get(kuponControllers.getKupon)

module.exports = router;