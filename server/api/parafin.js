const express = require('express')
const router = express.Router()
const axios = require("axios")

const PARAFIN_BASE_URL =
  process.env.EVIRONMENT === 'production' ? 'https://api.parafin.com' : 'https://api.dev.parafin.com'

// hardcoded for now, eventually fetch from url?
const EXT_BUSINESS_ID = "7ce6f582-950a-46d9-ae5a-339f72daf7d4|34e69d83-38a6-4aa2-9634-b6ac888b0ecf"

// router.get('/', (req, res) => {
//   res.send("success!")
// })

router.post("/token", async (req, res) => {
    const url = `${PARAFIN_BASE_URL}/auth/tokens`
    const data = {
      external_business_id: EXT_BUSINESS_ID
    }
    const config = {
      auth: {
        username: process.env.PARAFIN_CLIENT_ID,
        password: process.env.PARAFIN_CLIENT_SECRET,
      }
    }
    let result = ""
    
    try {
        result = await axios.post(url, data, config)
        console.log(result.data);
    } catch(error) {
        console.log(error);
    }
    
  
    res.send({
      authToken: result.data.bearer_token
    // authToken: ""
    });
  });

module.exports = router;
