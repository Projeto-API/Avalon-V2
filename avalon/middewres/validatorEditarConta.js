const { check, validationResult } = require("express-validator");

module.exports = [
  check("Nome").isString().bail(),

  check("Sobrenome").bail().isString().bail(),

  // check("CPF").withMessage("Este campo não pode ficar vazio").bail(),

  // check("Genero").withMessage("Este campo não pode ficar vazio").bail(),

  check("E-mail")
    .isEmail()
    .withMessage("Deve ser um e-mail valido")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Deve possuir pelo menos 3 caracteres")
    .bail(),

  check("Endereço")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Endereço muito curto")
    .bail(),

  check("Número")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Endereço muito curto")
    .bail(),

  check("CEP")
    .isNumeric()
    .isLength({ min: 5 })
    .withMessage("CEP muito curto")
    .bail(),

  check("Estado").isString().bail(),

  check("Cidade").isString().bail(),

  check("Complemento").isString().bail(),

  check("Data de nascimento")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Data muito curta")
    .bail(),
];
