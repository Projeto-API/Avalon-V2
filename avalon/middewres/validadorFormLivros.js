const { check } = require('express-validator');

module.exports = [
    check('título').notEmpty().withMessage('É obrigatório preencher o nome').bail().isString().isLength({ min: 3, max: 20 }),
    check('preco').notEmpty().withMessage('É obrigatório preencher o preço').bail().isNumeric(),
    check('idioma').notEmpty().withMessage('É obrigatório preencher o idioma').bail().isString().isLength({ min: 3, max: 20 }),
    check('ano').notEmpty().withMessage('É obrigatório preencher o ano').bail().isNumeric().isLength({ min: 2, max: 4 }),
    check('paginas').notEmpty().withMessage('É obrigatório preencher o número de páginas').bail().isNumeric().isLength({ min: 1, max: 6}),
    check('isbn').notEmpty().withMessage('É obrigatório preencher o isbn').bail().isNumeric().isLength({ min: 13, max: 13 }),
    check('sinopse').notEmpty().withMessage('É obrigatório preencher o cnpj').bail().isString().isLength({ min: 15, max: 400}),
]