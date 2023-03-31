check("documentoCPF")
  .notEmpty().bail()
  .withMessage("Este campo não pode ficar vazio").bail(),