require("dotenv").config();
const Category = require("./model");
const { connect } = require("mongoose");

// create category
const AddCategory = async (req, res) => {

    const { CategoryName, CategoryImage } = req.body

    try {
        await connect(process.env.MONGO_URI)

        const CheckDuplicate = await Category.exists({ CategoryName })

        if (CheckDuplicate) {

            res.json({
                message: "Category Already Exists"
            })

        } else {

            await Category.create({ CategoryName, CategoryImage })

            res.json({
                message: "Category Added Successfully"
            })
        }
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// get all categories
const AllCategories = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const categories = await Category.find()
        res.json({
            categories
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// category by id
const CategoryById = async (req, res) => {

    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI)
        const categories = await Category.find({ _id })
        res.json({
            categories
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// update category
const UpdateCategory = async (req, res) => {
    const { _id, CategoryName, CategoryImage } = req.body

    const filter = { _id }
    const update = { CategoryName, CategoryImage }

    try {
        await connect(process.env.MONGO_URI)

        await Category.findOneAndUpdate(filter, update, {
            new: true
        });

        const category = await Category.find()

        res.json({
            message: "Success",
            category
        })

    }

    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// delete category
const DeleteCategory = async (req, res) => {
    const { _id } = req.body

    try {
        await connect(process.env.MONGO_URI)
        await Category.deleteOne({ _id })
        res.json({
            message: "Category Deleted Successfully"
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

module.exports = { AddCategory, AllCategories, CategoryById, UpdateCategory, DeleteCategory }
