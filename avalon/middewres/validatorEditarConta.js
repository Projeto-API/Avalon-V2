const { check, validationResult } = require("express-validator");

module.exports = [
  check("Nome").isString().bail(),

  check("Sobrenome").bail().isString().bail(),

  // check("CPF").withMessage("Este campo não pode ficar vazio").bail(),

  // check("Genero").withMessage("Este campo não pode ficar vazio").bail(),

  check("E-mail")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .isEmail()
    .withMessage("Deve ser um e-mail valido")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Deve possuir pelo menos 3 caracteres")
    .bail(),

  check("Endereço")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Endereço muito curto")
    .bail(),

  check("Número")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Endereço muito curto")
    .bail(),

  check("CEP")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .isNumeric()
    .isLength({ min: 5 })
    .withMessage("CEP muito curto")
    .bail(),

  check("Estado")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .isString()
    .bail(),

  check("Cidade")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .isString()
    .bail(),

  check("Complemento")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .isString()
    .bail(),

  check("Data de nascimento")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Data muito curta")
    .bail(),
];
