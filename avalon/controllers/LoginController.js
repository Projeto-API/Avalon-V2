
const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log({ email, password })
      console.log(req.body)
      const passwordcripto = await bcrypt.hash(password, 10);
      console.log("passwordcripto", passwordcripto)
      const user = await Usuario.findOne({ where: { email } })

      console.log("user.tipo", user.tipo)
      console.log("userSenha", user.password)
      const validadorsenha = await bcrypt.compare(password, user.password)
      console.log("validadorsenha", validadorsenha)
      if (validadorsenha) {
        req.session.email = user.email;
        req.session.password = passwordcripto;
        req.session.tipo = user.tipo;
        console.log("Vai renderizar para minhaconta")
        return res.render('minhaconta')


      } else {
        console.log("Vai redirecionar para login")
        let alert = require('alert');
        alert("Senha Inválida")
        res.redirect('login')
      }


    } catch (erro) {
      console.log(erro)
    }
  },
  index: async (req, res) => {
    res.render('login');
  }
}