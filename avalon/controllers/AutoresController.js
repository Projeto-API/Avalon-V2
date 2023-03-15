const { Op } = require('sequelize');
const { Autor, Livro } = require('../models');
Op

module.exports = {
  index: async (req, res) => {
    try {
      const autores = await Autor.findAll({
        order: [
          ['nome', 'asc']
        ]

        // include: [
        //   {model: Livro, as: 'livros'}
        // ]
      });
      res.render('autores', { autores });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  search: async (req, res) => {
    try {
      const { search } = req.query;
      const autores = await Autor.findAll({
        where: search ? {
          [Op.or]: [
            { nome: { [Op.like]: '%' + search + '%' } },
            { id: search }
          ]
        } : null
      });

      res.render('autores', { autores });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  form: async (req, res) => {
    try {
      let autor;
      const { id } = req.params;

      if (id) autor = await Autor.findByPk(id);

      res.render('adicionarAutor', { autor });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  buscarAutor: async (req, res) => {
    try {
      const { id } = req.params
      const autor = await Autor.findByPk(id);
      console.log(autor)
      res.render('adicionarAutor', { autor });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }

  },

  criar: async (req, res) => {
    try {
      const { nome, biografia } = req.body;
      const foto = req.files.foto[0].filename;

      await Autor.create({ nome, biografia, foto });

      res.redirect('/admin/autores');

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
      res.redirect('/admin');
    }
  },


  editar: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, biografia, fotoguardada } = req.body;

      const fotoupload = req.files.foto?.[0].filename;
      await Autor.update({ nome, biografia, foto: fotoupload ? fotoupload : fotoguardada }, {
        where: { id }
      });

      res.redirect('/admin/autores');

    } catch (erro) {
      let
      alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  deletar: async (req, res) => {
    try {
      const { id } = req.params
      await Autor.destroy({
        where: { id }
      })

      return res.redirect('/admin/autores');

    } catch (error) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }

  }
}