const { check } = require('express-validator');
console.log('cheguei')
module.exports = [
    check('nome').notEmpty().withMessage('É obrigatório preencher o nome').bail().isString().isLength({ min: 3, max: 20 }),
    check('cnpj').notEmpty().withMessage('É obrigatório preencher a cnpj').bail().isNumeric().isLength({ min: 14, max: 14 }),
]
