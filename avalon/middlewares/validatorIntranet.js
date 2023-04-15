const { check } = require("express-validator");

module.exports = [
  check("passwordIntranet")
    .isLength({ min: 8 })
    .withMessage("e-mail ou senha inválidos")
    .notEmpty()
    .withMessage("Este campo não pode ficar estar vazio")
    .bail(),

  check("emailIntranet")
    .isLength({ min: 8 })
    .withMessage("e-mail ou senha inválidos")
    .notEmpty()
    .withMessage("Este campo não pode ficar estar vazio")
    .bail(),
];
