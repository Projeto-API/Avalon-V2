
const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');
module.exports = {
    login: async (req, res) => {
      try { 
      const {email, password } = req.body;
      console.log(email)
      console.log(req.body)
      const passwordcripto = await bcrypt.hash(password, 10);
      const user = await Usuario.findOne({where:{email}}).then(
      user => {
        console.log(user.password ) 
        const validadorsenha= bcrypt.compareSync(user.password,passwordcripto)
        if (validadorsenha) {
          req.session.email = user.email;
          req.session.password = passwordcripto;
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