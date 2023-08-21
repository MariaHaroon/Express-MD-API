require("dotenv").config();
const Product = require('./model')
const { connect } = require("mongoose");

// add product
const AddProduct = async (req, res) => {

    const { productName,thumbnail,description,category,brand,images,price,rating } = req.body

    try {
        await connect(process.env.MONGO_URI)

        const CheckDuplicate = await Product.exists({ productName })

        if (CheckDuplicate) {

            res.json({
                message: "Product Already Exists"
            })

        } else {

            await Product.create({ productName,thumbnail,description,category,brand,images,price,rating})

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

// update product
const UpdateProduct = async (req, res) => {
    const { productName,thumbnail,description,category,brand,images,price,rating,_id } = req.body

    const filter = {_id}
    const update = {productName,thumbnail,description,category,price,rating}

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
    const { productName } = req.body

    try {
        await connect(process.env.MONGO_URI)
        await Product.deleteOne({ productName })
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

// product by id
const ProductById = async (req, res) => {

    const { _id } = req.params
    if (!_id) {
        res.status(403).json({ message: "Please Give Product id" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const products = await Product.findOne({ _id })
        res.json({ products })
    }
}

    // const { _id } = req.query;

    // try {
    //     await connect(process.env.MONGO_URI)
    //     const products = await Product.find({ _id })
    //     res.json({
    //         products
    //     })
    // }
    // catch (error) {
    //     res.status(404).json({
    //         message: error.message
    //     })
    // }



//product by brand
const ProductByBrand = async (req, res) => {
    const { brand } = req.params
    if (!brand) {
        res.status(403).json({ message: "Please Enter BrandName" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const products = await Product.find({ brand })
        res.json({ products })
    }
}

// product by category
const ProductByCategory = async (req, res) => {
    const { category } = req.params
    if (!category) {
        res.status(403).json({ message: "Please Enter Category Name" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const products = await Product.find({ category })
        res.json({ products })
    }
}


module.exports = { AddProduct, AllProducts, UpdateProduct, DeleteProduct, ProductById, ProductByBrand, ProductByCategory}
