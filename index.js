const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

const options = {
  key: fs.readFileSync(__dirname + '/private.key', 'utf8'),
  cert: fs.readFileSync(__dirname + '/public.cert', 'utf8')
};

app.use(helmet({contentSecurityPolicy: false}));
app.use(compression());
app.use(express.static("build"));
https.createServer(options, app).listen(port);
