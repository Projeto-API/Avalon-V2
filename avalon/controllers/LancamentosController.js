const { Livro } = require('../models');

module.exports = {
  index: async (req, res) => {
    try {
      const livros = await Livro.findAll();

      res.render('lancamentos', { livros })

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }

  },
}