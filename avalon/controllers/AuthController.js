const bcrypt = require('bcryptjs');
const { Usuario } = require('../models');

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Usuario.findOne({ where: { email } })
      console.log(user)
      if (user) {
        console.log('cheguei')
        console.log(password)
        console.log(user.password)
        const validadorsenha = await bcrypt.compareSync(password, user.password)
        console.log(validadorsenha)

        if (validadorsenha) {
          req.session.email = user.email;
          req.session.tipo = user.tipo;
          req.session.userId = user.id;
          const userId = req.session.userId;
          console.log(userId)
          req.session.userName = user.nome;
          const userName = req.session.userName;
          console.log(userId);
          


          if (user.tipo === 1) {
            res.redirect('/admin');
          } else {

            res.redirect('/');
          }
        } else {
          req.flash('error', 'Senha Inválida');
          res.redirect('/teste');
        }
      }
    } catch (erro) {
      console.log(erro);
      req.flash('error', 'Erro ao realizar login');
      res.redirect('login');
    }
  },

  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await Usuario.findOne({ where: { email } });
      if (user) {
        const newPassword = Math.random().toString(36).slice(-8);
        const passwordcripto = await bcrypt.hash(newPassword, 10);

        await Usuario.update({ password: passwordcripto }, { where: { email } });

        // Enviar nova senha por email
        console.log(`Nova senha para ${email}: ${newPassword}`);

        req.flash('success', 'Nova senha enviada para o seu email');
        res.redirect('login');
      } else {
        req.flash('error', 'Usuário não encontrado');
        res.redirect('forgot-password');
      }
    } catch (erro) {
      console.log(erro);
      req.flash('error', 'Erro ao resetar senha');
      res.redirect('forgot-password');
    }
  }
};