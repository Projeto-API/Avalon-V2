const { Op } = require('sequelize');
const { Categoria } = require('../models');
Op

module.exports = {
  index: async (req, res) => {
    try {
      const categorias = await Categoria.findAll({
        order: [
          ['tipo', 'asc']
        ]
      });
      res.render('categorias', { categorias, userId: req.session.userId, userName: req.session.userName  });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  search: async (req, res) => {
    try {
      const { search } = req.query;
      const categorias = await Categoria.findAll({
        where: search ? {
          [Op.or]: [
            { tipo: { [Op.like]: '%' + search + '%' } },
            { id: search }
          ]
        } : null
      });

      res.render('categorias', { categorias, userId: req.session.userId, userName: req.session.userName  });
    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  form: async (req, res) => {
    try {
      let categoria;
      const { id } = req.params;

      if (id) categoria = await Categoria.findByPk(id);

      res.render('adicionarCategoria', { categoria, userId: req.session.userId, userName: req.session.userName  });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  async buscarCategoria(req, res) {
    try {
      const { id } = req.params

      const categoria = await Categoria.findByPk(id)
      res.render('adicionarCategoria', { categoria, userId: req.session.userId, userName: req.session.userName  });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }

  },

  criar: async (req, res) => {
    try {
      const { tipo } = req.body;
      await Categoria.create({ tipo });

      res.redirect('/admin/categorias');

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  editar: async (req, res) => {
    try {
      const { id } = req.params;
      const { tipo } = req.body;

      await Categoria.update({ tipo }, {
        where: { id }
      });

      res.redirect('/admin/categorias');

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params
      await Categoria.destroy({
        where: { id }
      })
      console.log("A categoria de id " + req.body.id + " foi deletada com sucesso");
      return res.redirect('/admin/categorias');

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }

  }
}
