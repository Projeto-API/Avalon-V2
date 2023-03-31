const { check } = require("express-validator");


module.exports = [
check("quantidadeSinopse")
  .notEmpty().bail()
  .withMessage("Informe uma quantidade").bail(),
]