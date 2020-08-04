const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  console.log('reached 2');
  res.send('<form method="POST" action="/product"><input type="text" name="title"/><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('reached 2');
  res.send('<h1>Welcome to express');
});

app.listen(3500);
