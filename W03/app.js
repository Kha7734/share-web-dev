'use strict';

import express from 'express';

const app = express();
app.use('/static', express.static('static'));

app.listen(3000, function () {
  console.log('Web server is running on http://localhost:3000');
});
