const { check } = require("express-validator");

module.exports = [
  check("cepFreteCarrinho")
    .isNumeric()
    .isLength({ min: 5 })
    .withMessage("CEP muito curto")
    .bail(),
];
