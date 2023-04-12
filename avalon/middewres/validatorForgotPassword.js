<<<<<<< HEAD
const { check, validationResultForgot } = require('express-validator');
console.log('editoras entrou')
=======
const { check, validationResult } = require("express-validator");
>>>>>>> 1f6e5bccf26f508ebc032ea58584f74d79019d11

module.exports = [
  check("E-mail")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail()
    .isEmail()
    .withMessage("Deve ser um e-mail valido")
    .bail()
    .isLength({ min: 4 })
    .withMessage("Deve possuir pelo menos 3 caracteres")
    .bail(),
];
