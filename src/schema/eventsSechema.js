const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventsSchema = Schema({
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
    participants: {
        id: {
            type: String,
            required: false,
        },
        userName: {
            type: String,
            required: false,
        },
        fullName: {
            type: String,
            required: false,
        },
        rol: {
            type: String,
            required: false,
        },
        institucionLink: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        },
    },
    comments: {
        userName: {
            type: String,
            required: false,
        },
        comment: {
            type: String,
            required: false,
        },
        required: false
    }
})

const events = mongoose.model("event", EventsSchema)
module.exports = events