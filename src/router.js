const express = require('express')
const router = express.Router()
const eventsController = require('./controllers/eventsController')

router.get('/test', (req, res, next) => res.status(200).send({"response": "server ok"}))
router.get('/getEventsList', eventsController.getEventsList)
router.get('/getEventsListByCategory/:category', eventsController.getEventsListByCategory)

router.post('/createEvent', eventsController.createEvent)
router.post('/addCommentToEvent', eventsController.addCommenToEvent)
router.post('/addParticipantToEvent', eventsController.addParticipantToEvent)

module.exports = router