const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventsSchema = Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    campus: {
        type: String,
        required: true
    },
    eventSite: {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            name: {
                type: String,
                required: true,
            },
            department: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            }
        }
    },
    participants: [Object],
    comments:[Object]
})

const events = mongoose.model("event", EventsSchema)
module.exports = events