const express = require('express');
const pesawatControllers = require('./../controllers/pesawatControllers.js');
const auth = require('../middleware/auth');

const router = express.Router();

router
.route('/pesawat')
.get(pesawatControllers.lihatPesawat)

router
.route('/pesawat/kursi')
.get(pesawatControllers.lihatKursi)

router
.route('/pesawat/pesan')
.post(auth, pesawatControllers.pesanPesawat)

router
.route('/pesawat/batal')
.put(auth, pesawatControllers.batalPesawat)

router
.route('/pesawat/selesai')
.put(auth, pesawatControllers.selesaiPesawat)

module.exports = router;