const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const axios = require("axios")
require('dotenv').config();

// middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

const PARAFIN_BASE_URL =
  process.env.EVIRONMENT === 'production' ? 'https://api.parafin.com' : 'https://api.dev.parafin.com'

// route for fetching Parafin token
app.get("/parafin/token/:id", async (req, res) => {
  const url = `${PARAFIN_BASE_URL}/auth/tokens`
  const businessId = req.params.id;
  let token;
  let error;
  
  const data = {
    external_business_id: businessId
  }
  
  const config = {
    auth: {
      username: process.env.PARAFIN_CLIENT_ID,
      password: process.env.PARAFIN_CLIENT_SECRET,
    }
  }  
  
  try {
    // make call to fetch Parafin token for business
    const result = await axios.post(url, data, config)
    token = result.data.bearer_token;
  
    res.send({
      token: token
    })
  } catch(error) {
    console.log(error);
    res.send({
      errorCode: error.response.status,
      message: error.response.data
    })
  }
});

// Starting Server
app.listen(process.env.PORT || 8080, () => {
	console.log(`App listening on PORT: ${process.env.PORT || 8080}`)
})
