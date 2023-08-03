const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({

    title : {
        type : String,
        required : true,
        unique : true
    },
    image : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    price : {
        type : String,
        required : true,
    },
    rating : {
        type : String,
        required : true,
    },

}) 

const Product = model('Product', ProductSchema)
module.exports = Product
