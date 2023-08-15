const app = require('express')
const router = app.Router()
const { demoMail, addOrders, orderbyId, allorders } = require('./controller')

router.post('/send-demo-mail', demoMail)
router.post('/createorder', addOrders)
router.get('/allorders', allorders)
router.get('/orderbyid/:_id', orderbyId)

module.exports = router