const { check } = require('express-validator');

module.exports = [
    check('nome').notEmpty().withMessage('É obrigatório preencher o nome').bail().isString().isLength({ min: 3, max: 20 }),
    check('biografia').notEmpty().withMessage('É obrigatório preencher a biografia').bail().isString(),
]