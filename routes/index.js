var express = require('express');
var router = express.Router();

/*users. */
router.use('/users', require('./users'));

/* PRODUCT CRUD */
router.get('/product', function(req, res, next) {
  res.status(200)
  res.send('Menampilkan semua product')
})

router.post('/product/add', function(req, res, next) {
  res.status(200)
  res.send('Menamahkan product baru')
})


module.exports = router;
