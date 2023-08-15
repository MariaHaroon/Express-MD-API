const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.SERVER_PORT

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/api', require('./api/user/router'))
app.use('/api', require('./api/product/router'))
app.use('/api', require('./api/category/router'))
app.use('/api', require('./api/brand/router'))
app.use('/api', require('./api/order/router'))
app.use('/api', require('./api/mailer/router'))

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})

// {
//   "username": "mh",
//   "email": "mh@gmail.com",
//   "password": "mh789"
// }
