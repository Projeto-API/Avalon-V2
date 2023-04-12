const { check } = require('express-validator');

module.exports = [
  check('titulo')
    .notEmpty().withMessage('Campo obrigatório').bail()
    .isString().withMessage('Não deve conter números').bail()
    .isLength({ min: 3, max: 20 }).withMessage('Deve possuir entre 3 e 10 caracteres').bail(),
  check('preco')
    .notEmpty().withMessage('Campo obrigatório').bail()
    .isNumeric().withMessage('Deve conter somente números').bail(),
  check('sinopse')
    .notEmpty().withMessage('Campo obrigatório').bail(),
]