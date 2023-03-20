var express = require('express');
const router = express.Router();

const checkoutController = require('../controllers/checkoutController');


router.get('/checkout', checkoutController.index);




module.exports = router;

module.exports = router;