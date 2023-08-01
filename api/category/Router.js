const app = require('express')
const router = app.Router()
const { AddCategory,AllCategories,CategoryById,UpdateCategory,DeleteCategory } = require('./Controller')


router.post('/addcategory', AddCategory)
router.get('/allcategories', AllCategories)
router.get('/categorybyid', CategoryById)
router.put('/updatecategory', UpdateCategory)
router.delete('/deletecategory', DeleteCategory)

module.exports = router
