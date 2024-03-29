const { Livro, Editora, Autor, ImagensLivro } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  index: async (req, res) => {
    try {
      const { id } = req.params
      const carrousel = await Livro.findAll();
      const livro = await Livro.findByPk(id, {
        include: [
          { model: Editora, as: 'editora' },
          { model: Autor, as: 'autor' },
          { model: ImagensLivro, as: 'imagens_livro' }]
      });

      console.log({ livro })
      res.render('sinopse', { carrousel, livro });


    } catch (erro) {
      console.log(erro)
    }

  }
}