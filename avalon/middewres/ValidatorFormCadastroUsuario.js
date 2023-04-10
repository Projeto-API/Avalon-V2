const { check, validationResult } = require("express-validator");

module.exports = [
  check("Nome")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail()
    .isString()
    .bail(),

  check("Sobrenome")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail()
    .isString()
    .bail(),

  check("CPF")
    .notEmpty()
    .bail()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  //check("nomeDeUsuario")
  //    .notEmpty().withMessage("Este campo não pode ficar vazio").bail(),

  check("e-mail")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail()
    .isEmail()
    .withMessage("Deve ser um e-mail valido")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Deve possuir pelo menos 3 caracteres")
    .bail(),

  //check("telefone")
  //  .isNumeric().withMessage("Deve conter apenas números").bail()
  //  .isLength({min:10}).withMessage("Deve conter pelo menos 10 caracteres").bail()
  //  .isLength({max:13}).withMessage("Deve conter no máximo 13 caracteres").bail()
  //  .isInt().withMessage("Use somente numeros inteiros").bail(),

  check("Endereço")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Endereço muito curto")
    .bail()
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  check("CEP")
    .isNumeric()
    .isLength({ min: 5 })
    .withMessage("CEP muito curto")
    .bail()
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  check("Estado")
    .isString()
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  check("Cidade")
    .isString()
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  check("Complemento")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  check("Senha")
    .isLength({ min: 8 })
    .withMessage("Utilize pelo menos 8 caracteres")
    .bail()
    .notEmpty()
    .bail(),

  check("Data de nascimento")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Data muito curta")
    .bail()
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),
];
