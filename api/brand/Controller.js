require("dotenv").config();
const Brand = require("./Model");
const { connect } = require("mongoose");

// create Brand
const AddBrand = async (req, res) => {

    const { BrandName, BrandImage } = req.body

    try {
        await connect(process.env.MONGO_URI)

        const CheckDuplicate = await Brand.exists({ BrandName })

        if (CheckDuplicate) {

            res.json({
                message: "Brand Already Exists"
            })

        } 
        else {

            await Brand.create({ BrandName, BrandImage })

            res.json({
                message: "Brand Added Successfully"
            })
        }
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// get all Brand
const AllBrands = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const Brands = await Brand.find()
        res.json({
            Brands
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// Brand by id
const BrandById = async (req, res) => {

    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI)
        const Brands = await Brand.find({ _id })
        res.json({
            Brands
                })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// update Brand
const UpdateBrand = async (req, res) => {
    const { _id, BrandName, BrandImage } = req.body

    const filter = { _id }
    const update = { BrandName, BrandImage }

    try {
        await connect(process.env.MONGO_URI)

        await Brand.findOneAndUpdate(filter, update, {
            new: true
        });

        const Brand = await Brand.find()

        res.json({
            message: "Success",
            Brand
        })

    }

    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// delete Brand
const DeleteBrand = async (req, res) => {
    const { _id } = req.body

    try {
        await connect(process.env.MONGO_URI)
        await Brand.deleteOne({ _id })
        res.json({
            message: "Brand Deleted Successfully"
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

module.exports = { AddBrand, AllBrands, BrandById, UpdateBrand, DeleteBrand }