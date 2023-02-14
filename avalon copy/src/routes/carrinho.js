const router = require ('express').Router();
const CarrinhoController =require('../controllers/carrinhoController');

router.get('/', CarrinhoController.index);
router.post('/', CarrinhoController.add);
router.post('/deletar', CarrinhoController.remove);
module.exports = router