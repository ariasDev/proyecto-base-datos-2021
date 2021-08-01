const eventsService = require('../services/eventsService')

exports.createEvent = async (req, res, next) => {
    console.log('entra al controlador');
    try {
        let eventCreated = await eventsService.createEvent(req.body)
        if (eventCreated.errors) {
            res.status(400).json(eventCreated)
        }
        else {
            res.status(201).json(eventCreated)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getEventsList = async (req, res, next) => {
    try {
        res.status(201).json(await eventsService.getEventsList())
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getEventsListByCategory = async (req, res, next) => {
    try {
        res.status(201).json(await eventsService.getEventsListByCategory(req.params.category))
    } catch (error) {
        res.status(500).json(error)
    }
}