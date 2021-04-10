const express = require('express');
const reserveRouter = express.Router();


const reservationData = require('../data/reservationData')
const waitListData = require('../data/waitListData')


reserveRouter.get('/', (req, res) => {
    res.send('/reserve');
});

module.exports = reserveRouter;