const express = require('express');
const axios = require('axios');
const path = require('path');
const https = require('https');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 5000;
const api_key = process.env.API_KEY;
const contract_address = process.env.CONTRACT_ADDRESS;
let [price, market_cap, circulating_supply] = [0, 0, 0];

const options = {
  key: fs.readFileSync(__dirname + '/private.key', 'utf8'),
  cert: fs.readFileSync(__dirname + '/public.cert', 'utf8')
};


// Fetch token data
setInterval(async () => {
  try {
    const price_resp = axios.get(`https://api.pancakeswap.info/api/v2/tokens/${contract_address}`);
    console.log(price_resp);
  } catch (e) {
    console.error(e);
  }
}, 500);


// Routing
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
https.createServer(options, app).listen(port);
