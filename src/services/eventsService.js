const eventsSchema = require('../schema/eventsSechema')
const uuid = require('../utilities/uuid')

exports.createEvent = (newEvent) => {
    let eventToCreate = new eventsSchema({
        id: uuid.generateId(),
        title: newEvent.title,
        description: newEvent.description,
        category: newEvent.category,
        date: newEvent.date,
        campus: newEvent.campus,
        eventSite: newEvent.eventSite,
        comments: [],
        participants: []
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

exports.addComment = (newComment) => {
    return eventsSchema.updateOne(
        {id: newComment.eventId},
        {"$push": { "comments": newComment.comment }}
    )
}

exports.addParticipant = (newParticipant) => {
    return eventsSchema.updateOne(
        {id: newParticipant.eventId},
        {"$push": { "participants": newParticipant.participant }}
    )
}