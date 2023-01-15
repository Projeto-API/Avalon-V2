const router = require ('express').Router();
const CarrinhoController =require('../controllers/carrinhoController');

router.get('/', CarrinhoController.index);
module.exports = router