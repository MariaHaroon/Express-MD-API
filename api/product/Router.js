const app = require('express')
const router = app.Router()
const { AddProduct,AllProducts,ProductById,UpdateProduct,DeleteProduct } = require('./Controller')


router.post('/addproduct', AddProduct)
router.get('/allproducts', AllProducts)
router.get('/productbyid', ProductById)
router.put('/updateproduct', UpdateProduct)
router.delete('/deleteproduct', DeleteProduct)

module.exports = router
