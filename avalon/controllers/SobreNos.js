module.exports = {
  index: async (req, res) => {
    try {

      res.render('sobreNos', {userId: req.session.userId, userName: req.session.userName })

      
    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

}
  




