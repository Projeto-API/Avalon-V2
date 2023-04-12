<<<<<<< HEAD
const { check, validationResultLogin } = require('express-validator');
console.log('login entrou')
=======
const { check, validationResult } = require("express-validator");
>>>>>>> 1f6e5bccf26f508ebc032ea58584f74d79019d11

module.exports = [
  check("E-mail")
    .notEmpty()
    .withMessage("Este campo não pode ficar estar vazio")
    .isEmail()
    .withMessage("Deve ser um e-mail valido")
    .isLength({ min: 4 })
    .withMessage("Deve possuir pelo menos 3 caracteres"),

  check("Senha")
    .isLength({ min: 8 })
    .withMessage("e-mail ou senha inválidos")
    .notEmpty()
    .withMessage("Este campo não pode ficar estar vazio")
    .bail(),
];
