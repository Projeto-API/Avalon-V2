const { check } = require("express-validator");

module.exports = [
  check("nome")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail()
    .isString()
    .bail(),

  check("sobrenome")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail()
    .isString()
    .bail(),

  check("doc_identificacao")
    .notEmpty()
    .bail()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  //check("nomeDeUsuario")
  //    .notEmpty().withMessage("Este campo não pode ficar vazio").bail(),

  check("email")
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

  check("endereco")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Endereço muito curto")
    .bail()
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  check("cep")
    .isNumber()
    .isLength({ min: 5 })
    .withMessage("CEP muito curto")
    .bail()
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  check("estado")
    .isString()
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  check("cidade")
    .isString()
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  check("complemento")
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Escolha uma senha de pelo menos 8 caracteres")
    .bail()
    .notEmpty()
    .bail(),

  check("data_nascimento")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Data muito curta")
    .bail()
    .notEmpty()
    .withMessage("Este campo não pode ficar vazio")
    .bail(),
];
