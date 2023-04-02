
module.exports = {
    index: async (req, res) => {
      try {
  
        res.render('sobreNos')
  
        
      } catch (erro) {
        let alert = require('alert');
        alert("ERRO 500 - Erro interno do servidor!")
      }
    },
  
  }
  

