const { check } = require('express-validator');

const validacoesLogin = [

  check('email')
.notEmpty().withMessage('Este campo não pode ficar estar vazio')
.isEmail().withMessage('Deve ser um e-mail valido')
.isLength({ min: 3}).withMessage('Deve possuir pelo menos 3 caracteres'),

check('password')
.isLength({min:8}).withMessage('Senha inválida')
.notEmpty().withMessage('Este campo não pode ficar estar vazio').bail(),

check('sinopse')
.notEmpty().withMessage('Campo obrigatório').bail(),  
]


module.exports = validacoesLogin
