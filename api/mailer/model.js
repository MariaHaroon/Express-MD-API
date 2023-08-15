const { Schema, model } = require('mongoose')


const emailSchema = newSchema({

    subject: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true

    },
    to: {
        type: String,
        required: true
    },
    html: {
        type: String,
        required: true
    }
})
const email = model('Email', emailSchema)
module.exports = email;