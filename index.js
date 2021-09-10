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
  supply: 0,
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
    const supply_resp = axios.get(`https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=${contract_address}&apikey=${api_key}`);

    // Set values
    token_data.price = +(await price_resp).data.data.price;
    token_data.supply = (await supply_resp).data.result / 1000000000;
    token_data.market_cap = token_data.price * token_data.supply;
    console.table(token_data)
  } catch (e) {
    console.error(e);
  }
}, 5000);

// Routing and middleware
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api', (req, res, next) => {
  res.send(token_data);
});


// Start setver
https.createServer(options, app).listen(port);
