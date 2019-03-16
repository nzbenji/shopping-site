const cors = require('cors')
const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./routes')
const app = express()

//DB setup
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true })

//App setup
app.use(morgan('combined'))
app.use(bodyParser.json({type: '*/*'}))
app.use(cors())
app.use('/api', router)

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))


//Server setup.
const port = process.env.PORT || 8080
const server = http.createServer(app)
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port', port)
})
