const { check, validationResultEditora } = require('express-validator');
console.log('editoras entrou')

module.exports = [
    check('nome').notEmpty().withMessage('É obrigatório preencher o nome').isString().isLength({ min: 3, max: 20 }).bail(),
    check('cnpj').notEmpty().withMessage('É obrigatório preencher a cnpj').isNumeric().isLength({ min: 14, max: 14 }).bail(),
]
