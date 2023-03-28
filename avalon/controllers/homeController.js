const { Livro, Editora, Autor, Categoria } = require('../models');

module.exports = {
  index: async (req, res) => {
    try {
      const livros = await Livro.findAll();
      const livrosLancamento = await Livro.findAll({
        limit: 8, 
        order: [['id','DESC']]
      });
      const editoras = await Editora.findAll();
      const autores = await Autor.findAll();
      const categorias = await Categoria.findAll();


      res.render('home', { livros, livrosLancamento, editoras, categorias, autores })

      
    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

}



