const app = require('express')
const router = app.Router()
const { AddProduct,AllProducts,UpdateProduct,DeleteProduct,ProductById,ProductByCategory,ProductByBrand } = require('./controller')


router.post('/addproduct', AddProduct)
router.put('/updateproduct', UpdateProduct)
router.delete('/deleteproduct', DeleteProduct)
router.get('/allproducts', AllProducts)
router.get('/productbyid/:_id', ProductById)
router.get('/productbycategory/:category', ProductByCategory)
router.get('/productbybrand/:brand', ProductByBrand)


module.exports = router
