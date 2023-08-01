const app = require('express')
const router = app.Router()
const { Signup, Login, AllUsers, UserByEmail, UserByid, DeleteUser, UpdateUser } = require('./Controller')

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/allusers', AllUsers)
router.get('/userbyemail/:email', UserByEmail)
router.get('/userbyd/:id', UserByid)
router.delete('/deleteuser',DeleteUser)
router.put('/updateuser',UpdateUser)

module.exports = router