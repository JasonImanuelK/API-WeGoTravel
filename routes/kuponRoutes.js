const express = require('express');
const kuponControllers = require('./../controllers/kuponControllers.js');
const auth = require('../middleware/auth');

const router = express.Router();

router
.route('/createKupon')
.post(auth('admin'), kuponControllers.createKupon)

router
.route('/lihatSemuaKupon')
.get(auth('admin'), kuponControllers.getKuponAdmin)

router
.route('/lihatKupon')
.get(auth('user'), kuponControllers.getKuponUser)

router
.route('/updateKupon/:id_kupon')
.put(auth('user'), kuponControllers.updateKupon)

module.exports = router;