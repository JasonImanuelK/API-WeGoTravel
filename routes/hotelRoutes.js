const express = require('express');
const hotelControllers = require('./../controllers/hotelControllers.js');
const auth = require('../middleware/auth');

const router = express.Router();

router
.route('/lihatHotel')
.post(auth('user'), hotelControllers.getHotel)

router
.route('/lihatKamar')
.get(auth('user'), hotelControllers.getKamar )

router
.route('/pesanHotel')
.get(auth('user'), hotelControllers.pesanHotel)

router
.route('/cancelPesanan')
.put(auth('admin'), hotelControllers.cancelPesanan)

router
.route('/checkout')
.delete(auth('admin'), hotelControllers.checkout)

module.exports = router;