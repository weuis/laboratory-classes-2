const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const renderNewProductPage = require('../views/renderNewProductPage');
const STATUS_CODE = require('../constants/statusCode');

router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});
/**/
router.post('/add', (req, res) => {
  fs.writeFileSync('product.txt', JSON.stringify(req.body));
  res.status(STATUS_CODE.FOUND).redirect('/product/new');
});

router.get('/new', (req, res) => {
  const data = fs.readFileSync('product.txt', 'utf8');
  res.send(renderNewProductPage(JSON.parse(data)));
});

module.exports = router;/**/