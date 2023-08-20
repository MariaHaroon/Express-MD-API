const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT

const cors = require('cors')
const path = require('path')

const clientpath = path.join(__dirname, './client/dist')
app.use('/', express.static(clientpath))

app.use(express.json())
app.use(cors())

app.use('/api', require('./api/user/router'))
app.use('/api', require('./api/product/router'))
app.use('/api', require('./api/category/router'))
app.use('/api', require('./api/brand/router'))
app.use('/api', require('./api/order/router'))
app.use('/api', require('./api/mailer/router'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})

// {
//   "username": "mh",
//   "email": "mh@gmail.com",
//   "password": "mh789"
// }
