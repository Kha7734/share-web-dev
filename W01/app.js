'use strict';

import express from 'express';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
  res.send('Hello World!!!');
});

app.get('/test', function (req, res) {
  //   res.sendFile(__dirname + '/index.html');
  res.sendFile('test.html', { root: __dirname });
});

app.listen(3000, function serverStarterHandler() {
  console.log('Web server is running at http://localhost:3000');
});
