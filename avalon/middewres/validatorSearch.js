const { check } = require("express-validator");

module.exports = [
  check("searchEditoras")
    .isLength({ min: 3 })
    .withMessage("Deve possuir pelo menos 3 caracteres")
    .bail(),
];
