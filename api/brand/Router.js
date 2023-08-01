const app = require('express')
const router = app.Router()
const { AddBrand,AllBrands,BrandById,UpdateBrand,DeleteBrand } = require('./Controller')


router.post('/addbrand', AddBrand)
router.get('/allbrands', AllBrands)
router.get('/brandbyid', BrandById)
router.put('/updatebrand', UpdateBrand)
router.delete('/deletebrand', DeleteBrand)

module.exports = router
