const express = require("express");
const apiRouter = express.Router();


//where the data lives//
const reservationData = require('../data/reservationData')
const waitingListData = require('../data/WaitlistData')


apiRouter.get('/tables', (req, res) => {
    res.json(reservationData);
})

apiRouter.get('/waitlist', (req, res) => {
    res.json(waitListData);
})

module.exports = apiRouter;