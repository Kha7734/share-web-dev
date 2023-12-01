const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/static', express.static('static'));

app.listen(3000, function () {
  console.log('Web server is running on http://localhost:3000');
});
