const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')


const port = process.env.SERVER_PORT

app.use(cors())

app.use(express.json())
app.use('/api', require('./api/user/Router'))
app.use('/api', require('./api/product/Router'))
app.use('/api', require('./api/category/Router'))
app.use('/api', require('./api/brand/Router'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// {
//   "username": "mh",
//   "email": "mh@gmail.com",
//   "password": "mh789"
// }