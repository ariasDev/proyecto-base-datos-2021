const express = require('express')
const router = express.Router()
const eventsController = require('./controllers/eventsController')

router.post('/createEvent', eventsController.createEvent)
router.get('/test', (req, res, next) => res.status(200).send({"response": "server ok"}))
router.get('/getEventsList', eventsController.getEventsList)
router.get('/getEventsListByCategory/:category', eventsController.getEventsListByCategory)

module.exports = router