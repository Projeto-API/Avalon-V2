
const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res) => {
      try { 
      const {email, password } = req.body;
      console.log(email)
      console.log(req.body)
      const passwordcripto = await bcrypt.hash(password, 10);
 console.log(passwordcripto)
      const user = await Usuario.findOne({where:{email}}).then(
      user => {
        console.log(user) 
        const validadorsenha= bcrypt.compare(password, user.password)
        console.log(validadorsenha)
        if (validadorsenha) {
          req.session.email = user.email;
          req.session.password = passwordcripto;
          req.session.tipo = user.tipo;

          return res.render ('minhaconta')

        
        }else{
          let alert = require('alert');
        alert("Senha Inválida")
        res.redirect('login')
        }
      }
    )
      } catch (erro) {
        console.log(erro)
      }
    },
    index: async (req, res) => {
      res.render('login');
    }
  }