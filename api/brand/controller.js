require("dotenv").config();
const Brand = require("./model");
const { connect } = require("mongoose");

// add Brand
const AddBrand = async (req, res) => {

    const { BrandName, BrandImage } = req.body
    if (!BrandName || !BrandImage) {
        res.json({
            message: "Please Insert Values"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            const CheckDuplicate = await Brand.findOne({ BrandName })
            if (CheckDuplicate) {
                res.json({
                    message: "Brand Already Exists"
                })
            }
            else {
                await Brand.create({ BrandName, BrandImage })
                const brands = await Brand.find()
                res.status(201).json({
                    message: "Brand Added in Directory",
                    brands: brands
                })
            }
        }
        catch (error) {
            res.status(404).json({
                message: error.message
            })
        }

    }
}

// get all Brand
const AllBrands = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const brands = await Brand.find()
        res.status(200).json({
            brands
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

    if (!_id) {
        res.status(400).json({
            message: "Please give the Brand ID",

        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            const Brands = await Brand.findOne({ _id })
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
}

// update Brand
const UpdateBrand = async (req, res) => {
    const { _id, BrandName, BrandImage } = req.body

    const filter = { _id }
    const update = { BrandName, BrandImage }

    if (!_id) {
        res.status(400).json({
            message: "Please give the Brand ID"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            const brands = await Brand.findOneAndUpdate
                (filter, update, { new: true });

            res.json({
                message: "Success",
                brands
            })

        }

        catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }
}

// delete Brand
const DeleteBrand = async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        res.status(400).json({
            message: "Please give Brand ID"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            await Brand.deleteOne({ _id })
            const allbrands = await Brand.find()

            res.json({
                message: "Successfully Deleted",
                brands: allbrands
            })
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            })

        }
    }

}

module.exports = { AddBrand, AllBrands, BrandById, UpdateBrand, DeleteBrand }
