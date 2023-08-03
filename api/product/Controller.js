require("dotenv").config();
const Product = require('./model')
const { connect } = require("mongoose");

// create product
const AddProduct = async (req, res) => {

    const { title,image,description,category,price,rating } = req.body

    try {
        await connect(process.env.MONGO_URI)

        const CheckDuplicate = await Product.exists({ title })

        if (CheckDuplicate) {

            res.json({
                message: "Product Already Exists"
            })

        } else {

            await Product.create({ title,image,description,category,price,rating })

            res.json({
                message: "Product Added Successfully"
            })
        }
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// get all products
const AllProducts = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const products = await Product.find()
        res.json({
            products
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// product by id
const ProductById = async (req, res) => {

    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI)
        const products = await Product.find({ _id })
        res.json({
            products
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// update product
const UpdateProduct = async (req, res) => {
    const { title,image,description,category,price,rating,_id } = req.body

    const filter = {_id}
    const update = {title,image,description,category,price,rating}

    try {
        await connect(process.env.MONGO_URI)

        await Product.findOneAndUpdate(filter, update, {
            new: true
        });

        const products = await Product.find()

        res.json({
            message: "Success",
            products
        })

    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// delete product
const DeleteProduct = async (req, res) => {
    const { title } = req.body

    try {
        await connect(process.env.MONGO_URI)
        await Product.deleteOne({ title })
        res.json({
            message: "Product Deleted Successfully"
        })
    } 
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}


module.exports = { AddProduct, AllProducts, ProductById, UpdateProduct, DeleteProduct}