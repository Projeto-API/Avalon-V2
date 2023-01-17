const router = require ('express').Router();
const CarrinhoController =require('../controllers/carrinhoController');

router.get('/', CarrinhoController.index);
router.post('/', CarrinhoController.add);
module.exports = router