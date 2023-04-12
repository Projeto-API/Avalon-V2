const bcrypt = require("bcryptjs");
const { Usuario } = require("../models");
const { validationResult } = require("express-validator");

module.exports = {
  login: async (req, res) => {
    try {
      let errors = validationResult(req);

      if (errors.isEmpty()) {
        //return res.render("cadastroUsuario", { errors });
      } else {
        return res.render("login", { errors: errors.mapped() });
        //        res.render("cadastroUsuario", { errors: errors.mapped(), old: req.body });
      }

      const { email, password } = req.body;
      const user = await Usuario.findOne({ where: { email } });

      if (user) {
        const validadorsenha = await bcrypt.compare(password, user.password);

        if (validadorsenha) {
          req.session.email = user.email;
          req.session.tipo = user.tipo;

          if (user.tipo === 1) {
            res.redirect("admin");
          } else {
            res.redirect("conta");
          }
        } else {
          req.flash("error", "Senha Inválida");
          res.redirect("login");
        }
      }
    } catch (erro) {
      console.log(erro);
      req.flash("error", "Erro ao realizar login");
      res.redirect("login");
    }
  },

  forgotPassword: async (req, res) => {
    try {
      let errors = validationResult(req);

      if (errors.isEmpty()) {
        //return res.render("cadastroUsuario", { errors });
      } else {
        return res.render("forgot-password", { errors: errors.mapped() });
        //        res.render("cadastroUsuario", { errors: errors.mapped(), old: req.body });
      }

      const { email } = req.body;
      const user = await Usuario.findOne({ where: { email } });
      if (user) {
        const newPassword = Math.random().toString(36).slice(-8);
        const passwordcripto = await bcrypt.hash(newPassword, 10);

        await Usuario.update(
          { password: passwordcripto },
          { where: { email } }
        );

        // Enviar nova senha por email
        console.log(`Nova senha para ${email}: ${newPassword}`);

        req.flash("success", "Nova senha enviada para o seu email");
        res.redirect("login");
      } else {
        req.flash("error", "Usuário não encontrado");
        res.redirect("forgot-password");
      }
    } catch (erro) {
      console.log(erro);
      req.flash("error", "Erro ao resetar senha");
      res.redirect("forgot-password");
    }
  },
};
