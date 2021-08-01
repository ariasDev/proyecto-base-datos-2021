const eventsSchema = require('../schema/eventsSechema')

exports.createEvent = (newEvent) => {
    let eventToCreate = new eventsSchema({
        title: newEvent.title,
        description: newEvent.description,
        category: newEvent.category,
        date: newEvent.date,
        campus: newEvent.campus,
        eventSite: newEvent.eventSite,
    })
    return eventToCreate.save()
    .then(resolve => {
        return resolve
    })
    .catch(reject => {
        return reject
    })
}

exports.getEventsList = () => {
    return eventsSchema.find().then(resolve => {
        return resolve
    })
    .catch(reject => {
        return reject
    })
}

exports.getEventsListByCategory = (category) => {
    return eventsSchema.find({"category": category})
    .then(resolve => {
        return resolve
    })
    .catch(reject => {
        return reject
    })
}