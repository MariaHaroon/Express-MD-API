const { Schema, model } = require('mongoose')


const emailSchema = new Schema({

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
const email = model('email', emailSchema)
module.exports = email;