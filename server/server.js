const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
require('dotenv').config();

const user = require('./api/user')

// middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// API endpoints
app.use('/api/user', user)

// Starting Server
app.listen(process.env.PORT || 8080, () => {
	console.log(`App listening on PORT: ${process.env.PORT || 8080}`)
})
