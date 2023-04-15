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
.route('/lihatKupon/:id_pengguna')
.get(auth('user'), kuponControllers.getKuponUser)

router
.route('/deleteKupon/:id_kupon')
.delete(auth('admin'), kuponControllers.deleteKupon)

module.exports = router;