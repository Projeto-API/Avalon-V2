const router = require('express').Router();
const EditoraController = require('../controllers/EditoraController')

router.get('/', EditoraController.index);

router.get('/form/:id?', EditoraController.form);

router.post('/', EditoraController.criar);

router.put('/:id', EditoraController.editar);

router.delete('/:id', EditoraController.remover);

module.exports = router;
