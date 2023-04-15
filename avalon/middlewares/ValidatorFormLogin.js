const { check, validationResult } = require("express-validator");

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
