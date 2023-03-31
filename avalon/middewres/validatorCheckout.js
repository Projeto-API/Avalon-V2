const { check } = require("express-validator");

module.exports = [
  check("destinatarioCheckout").isString().bail(),

  check("cepCheckout")
    .isNumeric()
    .isLength({ min: 5 })
    .withMessage("CEP muito curto")
    .bail(),

  check("bairroCheckout")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Nome do bairro muito curto")
    .bail(),

  check("ruaCheckout")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Endereço muito curto")
    .bail(),

  check("numeroCheckout").isNumeric().bail(),

  check("complementoCheckout").isString().bail(),

  check("referenciaCheckout").isString().bail(),
];
