import express from 'express';
import { engine } from 'express-handlebars';
import numeral from 'numeral';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import categoryRoute from './routes/category.route.js';
import productRoute from './routes/product-user.route.js';

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    defaultLayout: 'bs4',
    helpers: {
      format_number: function(val){
        return numeral(val).format('0,0') + ' đ';
      }
    }
  })
);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/static', express.static('static'));

// function HomePageHandler(req, res) {
//   res.send('Hello World!');
// }
// app.get('/', HomePageHandler);

// function serverStartedHandler() {
//   console.log('Web server is running at http://localhost:3000');
// }
// app.listen(3000, serverStartedHandler);

app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.render('home');
});

// app.get('/admin/categories', async function (req, res) {
//   // categoryService.findAll()
//   //   .then(function (rows) {
//   //     console.log(rows);
//   //   })

//   const list = await categoryService.findAll();
//   res.render('vwCategory/list', {
//     list: list,
//     empty: list.length === 0
//   });
// })

app.use('/admin/categories', categoryRoute);
app.use('/admin/products', productRoute);

app.get('/test', function (req, res) {
  res.sendFile(__dirname + '/test.html');
});

app.listen(3000, function serverStartedHandler() {
  console.log('Web server is running at http://localhost:3000');
});
