const router = require ('express').Router();
const CarrinhoController =require('../controllers/carrinhoController');

router.get('/', CarrinhoController.index);
router.post('/', CarrinhoController.add);
router.delete('produto/delete/:id', CarrinhoController.delete);
module.exports = router