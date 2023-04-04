const { check } = require("express-validator");

module.exports = [
  check("nomeEditarConta").isString().bail(),

  check("sobrenomeEditarConta").bail().isString().bail(),

  check("doc_identificacaoEditarConta")
    .withMessage("Este campo não pode ficar vazio")
    .bail(),

  check("genero").withMessage("Este campo não pode ficar vazio").bail(),

  check("emailEditarConta")
    .isEmail()
    .withMessage("Deve ser um e-mail valido")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Deve possuir pelo menos 3 caracteres")
    .bail(),

  check("enderecoEditarConta")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Endereço muito curto")
    .bail(),

  check("numeroEditarConta")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Endereço muito curto")
    .bail(),

  check("cepEditarConta")
    .isNumeric()
    .isLength({ min: 5 })
    .withMessage("CEP muito curto")
    .bail(),

  check("estadoEditarConta").isString().bail(),

  check("cidadeEditarConta").isString().bail(),

  check("complementoEditarConta").isString().bail(),

  check("passwordCadastro")
    .isLength({ min: 8 })
    .withMessage("Escolha uma senha de pelo menos 8 caracteres")
    .bail(),

  check("data_nascimentoEditarConta")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Data muito curta")
    .bail(),
];
