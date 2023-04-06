const express = require('express');
const travelControllers = require('./../controllers/travelControllers.js');

const router = express.Router();

router
.route('/')
.post(travelControllers.createTour)
.get(travelControllers.getAllTours);

router
.route('/satu/:id')
.get(travelControllers.getTour);

module.exports = router;