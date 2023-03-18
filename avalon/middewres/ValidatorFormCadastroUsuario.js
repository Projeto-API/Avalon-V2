const { body } = require("express-validator");

const validacoesCadastro = [
body("nome")
.notEmpty().withMessage("Este campo não pode ficar vazio").bail()
.isString().bail()

body("sobrenome")
.notEmpty().withMessage("Este campo não pode ficar vazio").bail()
.isString().bail()

body("documentoCPF")
  .notEmpty().bail()
  .withMessage("Este campo não pode ficar vazio").bail(),

body("nomeDeUsuario")
    .notEmpty().withMessage("Este campo não pode ficar vazio").bail()
  
body("email")
    .notEmpty().withMessage("Este campo não pode ficar vazio").bail()
    .isEmail().withMessage("Deve ser um e-mail valido").bail()
    .isLength({ min: 3 }).withMessage("Deve possuir pelo menos 3 caracteres").bail(),

body("telefone")
  .isNumeric().withMessage("Deve conter apenas números").bail()
  .isLength({min:10}).withMessage("Deve conter pelo menos 10 caracteres").bail()
  .isLength({max:13}).withMessage("Deve conter no máximo 13 caracteres").bail()
  .isInt().withMessage("Use somente numeros inteiros").bail()

body("endereco")
  .isString()
  .isLength({min:3}).withMessage("Endereço muito curto").bail()
  .notEmpty().withMessage("Este campo não pode ficar vazio").bail()

  .withMessage("Este campo não pode ficar vazio").bail(),
  body("password")
      .isLength({ min: 8 })
      .withMessage("Senha inválida").bail()
      .notEmpty().bail(),
]
module.exports = [validacoesLogin];