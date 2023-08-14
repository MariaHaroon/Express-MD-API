const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')


const port = process.env.SERVER_PORT

app.use(cors())

app.use(express.json())
app.use('/api', require('./api/user/router'))
app.use('/api', require('./api/product/router'))
app.use('/api', require('./api/category/router'))
app.use('/api', require('./api/brand/router'))


app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})

// {
//   "username": "mh",
//   "email": "mh@gmail.com",
//   "password": "mh789"
// }
