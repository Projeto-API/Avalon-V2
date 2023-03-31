const { check } = require("express-validator");

module.exports = [
  check("emailForgotPassword")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail()
    .isEmail()
    .withMessage("Deve ser um e-mail valido")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Deve possuir pelo menos 3 caracteres")
    .bail(),
];
