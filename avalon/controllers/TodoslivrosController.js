const { Livro } = require('../models');
const { Op } = require('sequelize');
Op

module.exports = {
  index: async (req, res) => {
    try {
      const livros = await Livro.findAll();

      res.render('todososlivros', { livros, userId: req.session.userId, userName: req.session.userName  })

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }

  },

  search: async (req, res) => {
    const { search } = req.query;
    const livros = await Livro.findAll({
      where: search ? {
        [Op.or]: [
          { titulo: { [Op.like]: '%' + search + '%' } },
        ]
      } : null
    });

    res.render('todososlivros', { livros, userId: req.session.userId, userName: req.session.userName  });
  },

  searchCategoria: async (req, res) => {
    const { search } = req.query;
    const livros = await Livro.findAll({
      where: search ? {
        categorias_id: { [Op.like]: '%' + search }
      } : null
    });

    res.render('todososlivros', { livros, userId: req.session.userId, userName: req.session.userName  });
  }

}