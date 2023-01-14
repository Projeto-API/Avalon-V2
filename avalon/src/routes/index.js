const express = require('express');
const router = express.Router();
const multer = require("multer");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Express', css: 'home' });
});


module.exports = router;
