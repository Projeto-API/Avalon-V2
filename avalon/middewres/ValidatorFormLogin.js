const { check, validationResult } = require("express-validator");

module.exports = [
  check("email")
    .notEmpty()
    .withMessage("Este campo não pode ficar estar vazio")
    .isEmail()
    .withMessage("Deve ser um e-mail valido")
    .isLength({ min: 4 })
    .withMessage("Deve possuir pelo menos 3 caracteres"),

  check("passwordLogin")
    .isLength({ min: 8 })
    .withMessage("e-mail ou senha inválidos")
    .notEmpty()
    .withMessage("Este campo não pode ficar estar vazio")
    .bail(),
];
