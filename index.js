const express = require('express');
const path = require('path');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

const options = {
  key: fs.readFileSync(__dirname + '/private.key', 'utf8'),
  cert: fs.readFileSync(__dirname + '/public.cert', 'utf8')
};

app.use(helmet());
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

https.createServer(options, app).listen(port);
