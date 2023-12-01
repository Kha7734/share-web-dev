// const express = require('express');
// const app = express();
// const engine = require('express-handlebars');
import express from 'express';
import { engine } from 'express-handlebars';
import categoryService from './services/category.service.js';
import categoryRoute from './routes/category.route.js';

const app = express();
app.use(express.urlencoded({
  extended: true
}));

// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = dirname(fileURLToPath(import.meta.url));

app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    defaultLayout: 'bs5',
    // layoutsDir: "views/vwCategory"
  })
);
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

// app.get('/admin/categories', async function (req, res) {
//   // const list = await categoryService.findAll().then(function (row) {
//   //   // console.log(row);
    
//   // });
//   // console.log(list);
//   const list = await categoryService.findAll();
//   res.render('vwCategory/list', {
//     list: list,
//     empty: list.length === 0
//   });
// });

app.use('/admin/categories', categoryRoute);

app.use('/static', express.static('static'));

app.listen(3000, function () {
  console.log('Web server is running on http://localhost:3000');
});

