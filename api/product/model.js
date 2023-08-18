const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({

    productName: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    }

})

const Product = model('Product', ProductSchema)
module.exports = Product
