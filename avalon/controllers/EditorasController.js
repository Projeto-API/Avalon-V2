const { Editora } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  index: async (req, res) => {
    try {

      const editoras = await Editora.findAll();

      res.render('editoras', { editoras, userId: req.session.userId, userName: req.session.userName  })

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  search: async (req, res) => {
    try {
      const { search } = req.query;
      const editoras = await Editora.findAll({
        where: search ? {
          [Op.or]: [
            { nome: { [Op.like]: '%' + search + '%' } },
            { id: search }
          ]
        } : null
      });

      res.render('editoras', { editoras, userId: req.session.userId, userName: req.session.userName  })

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  form: async (req, res) => {
    try {
      let editora;
      const { id } = req.params;

      if (id) editora = await Editora.findByPk(id);

      res.render('adicionarEditora', { editora });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  buscarEditora: async (req, res) => {
    try {
      const { id } = req.params

      const editora = await Editora.findByPk(id)
      res.render('adicionarEditora', { editora, userId: req.session.userId, userName: req.session.userName  });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }

  },

  criar: async (req, res) => {
    try {
      const { nome, cnpj } = req.body;
      await Editora.create({ nome, cnpj });

      res.redirect('/admin/editoras');

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  editar: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, cnpj } = req.body;

      await Editora.update({ nome, cnpj }, {
        where: { id }
      });

      res.redirect('/admin/editoras');

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  deletar: async (req, res) => {
    const { id } = req.params

    try {

      await Editora.destroy({
        where: { id }
      })

      return res.redirect('/admin/editoras');

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  }
}
