const { check } = require('express-validator');

module.exports = [
    check('título').notEmpty().withMessage('É obrigatório preencher o nome').bail().isString().isLength({ min: 3, max: 40 }),
    check('cnpj').notEmpty().withMessage('É obrigatório preencher o cnpj').bail().isNumeric(),
]
