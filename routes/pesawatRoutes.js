const express = require('express');
const pesawatControllers = require('./../controllers/pesawatControllers.js');
const auth = require('../middleware/auth');

const router = express.Router();

router
.route('/')
.get(pesawatControllers.lihatPesawat)

router
.route('/kursi/:id')
.get(pesawatControllers.lihatKursi)

router
.route('/pesan')
.post(pesawatControllers.pesanPesawat)

router
.route('/batal')
.put(pesawatControllers.batalPesawat)

router
.route('/selesai')
.put(pesawatControllers.selesaiPesawat)

module.exports = router;