const express = require('express');
const axios = require('axios');
const path = require('path');
const https = require('https');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 5000;
const api_key = process.env.API_KEY;
const contract_address = process.env.CONTRACT_ADDRESS;

// Initialize token data
const token_data = {
  price: 0,
  circulating_supply: 0,
  market_cap: 0
}

// SSL Certificate
const options = {
  key: fs.readFileSync(__dirname + '/private.key', 'utf8'),
  cert: fs.readFileSync(__dirname + '/public.cert', 'utf8')
};

// Fetch token data
setInterval(async () => {
  try {
    const price_resp = axios.get(`https://api.pancakeswap.info/api/v2/tokens/${contract_address}`);
    const supply_resp = axios.get(`https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=${contract_address}&apikey=${api_key}`);

  } catch (e) {
    console.error(e);
  }
}, 500);

// Routing and middleware
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start setver
https.createServer(options, app).listen(port);
