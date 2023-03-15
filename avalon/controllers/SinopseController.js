const { Livro, Editora, Categoria, Autor } = require('../models');

module.exports = {
  index: async (req, res) => {
    try {
      const { id } = req.params
      const carrousel = await Livro.findAll();
      const livro = await Livro.findByPk(id);
      const editora = await Editora.findAll();
      const categoria = await Categoria.findAll();
      const autor = await Autor.findAll();

      res.render('sinopse', { carrousel, livro, editora, categoria, autor });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }

  }
}