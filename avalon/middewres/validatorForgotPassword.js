const { check, validationResult } = require("express-validator");

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
