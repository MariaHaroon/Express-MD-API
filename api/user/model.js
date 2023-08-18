const { Schema, model } = require('mongoose')


const UserSchema = new Schema({

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    profilepicture: {
        type: String,
        default: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png'
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    joining: {
        type: Date,
        default: Date.now
    }

})


const User = model('User', UserSchema)
module.exports = User
