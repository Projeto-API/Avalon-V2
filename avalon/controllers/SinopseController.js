const { Livro, Editora, Categoria, Autor } = require('../models');

module.exports = {
  index: async (req, res) => {
    try {
      const { id } = req.params
      const livros = await Livro.findAll();
      const carrousel = await Livro.findAll();
      const livro = await Livro.findByPk(id, {
        include: [
          { model: Editora, as: 'editora'},
          { model: Autor, as: 'autor'}]
      });

      console.log({ livro })
      res.render('sinopse', { livros, carrousel, livro });


    } catch (erro) {
      console.log(erro)
    }

  }
}