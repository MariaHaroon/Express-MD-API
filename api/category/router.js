const app = require('express')
const router = app.Router()
const { AddCategory,AllCategories,UpdateCategory,DeleteCategory,CategoryById,CategoryByName } = require('./controller')


router.post('/addcategory', AddCategory)
router.put('/updatecategory', UpdateCategory)
router.delete('/deletecategory', DeleteCategory)
router.get('/allcategories', AllCategories)
router.get('/categorybyid/:_id', CategoryById) ////xxxxparamsxxxx
router.get('/categorybyname/:name', CategoryByName) /////////query
 
module.exports = router
