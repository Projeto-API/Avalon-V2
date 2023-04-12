const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const validatorCadastro = require("../middewres/ValidatorFormCadastroUsuario");
const validatorEditarConta = require("../middewres/validatorEditarConta");
const validatorForgotPassword = require("../middewres/validatorForgotPassword");
const validatorLogin = require("../middewres/ValidatorFormLogin");

const MinhasComprasController = require("../controllers/MinhasComprasController");
const LoginController = require("../controllers/LoginController");
const UsuarioController = require("../controllers/CadastrousuarioController");
const AuthController = require("../controllers/AuthController");
const ContaController = require("../controllers/ContaController");

router.get("/compras", MinhasComprasController.index);
router.get("/conta", ContaController.index);
router.get("/login", LoginController.index);
router.post("/entrar", validatorLogin, LoginController.login);
router.get("/cadastro", UsuarioController.index);
router.post("/cadastro", validatorCadastro, UsuarioController.criar);
router.get("/editar-conta", UsuarioController.form);
router.put("/editar-conta", validatorEditarConta, UsuarioController.editar);

router.get("/forgot-password", LoginController.forgotPassword);
router.post("/login", validatorLogin, AuthController.login);
router.post(
  "/forgot-password",
  validatorForgotPassword,
  AuthController.forgotPassword
);

router.get("/forgot-password", (req, res) => {
  console.log(req.flash("error")); // Verificar se a variável messages está sendo definida corretamente
  res.render("forgot-password", { messages: req.flash("error") });
});

module.exports = router;
