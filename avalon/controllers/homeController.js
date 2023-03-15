const { Livro, Editora, Autor, Categoria } = require('../models');

module.exports = {
  index: async (req, res) => {
    try {
      const livros = await Livro.findAll();
      const editoras = await Editora.findAll();
      const autores = await Autor.findAll();
      const categorias = await Categoria.findAll();


      res.render('home', { livros, editoras, categorias, autores })

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

}