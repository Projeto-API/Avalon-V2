
const { Usuario } = require('../models');
module.exports = {
    login: async (req, res) => {
      try {
        
      const {email, password } = req.body;
      console.log(req.body)
      const passwordcripto = bcrypt.hash(password, 10)
      const user = await Usuario.findOne({where:{email}}).then(
      user => {
        console.log('entrei')
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
        // let alert = require('alert');
        // alert("ERRO 500 - Erro interno do servidor!")
      }
    },
    index: async (req, res) => {
      res.render('login');
    }
  }