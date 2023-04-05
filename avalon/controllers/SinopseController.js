const { Livro, Editora, Autor, ImagensLivro } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  index: async (req, res) => {
    try {
      const { id } = req.params
      const livros = await Livro.findAll();
      const carrousel = await Livro.findAll();
      const livro = await Livro.findByPk(id, {
        include: [
          { model: Editora, as: 'editora' },
          { model: Autor, as: 'autor' }]
      });
      const { search } = req.query;
      const imagens = await ImagensLivro.findAll({
        where: search ? {
          [Op]: [
            {id: search }
          ]
        } : null,
        include: [
          { model: Livro, as: 'livros' },
          { model: Editora, as: 'editora' },]
      });

      console.log(id)
      res.render('sinopse', { livros, carrousel, livro, imagens });


    } catch (erro) {
      console.log(erro)
    }

  }
}