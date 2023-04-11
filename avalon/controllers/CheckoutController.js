const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const { Livro, Usuario } = require('../models');

Op


module.exports = {
  index: async (req, res) => {
    try {
      const { id } = req.params

      const livros = await Livro.findAll();
      

      const usuarios = await Usuario.findByPk(id)

      res.render('checkout', { usuarios, livros,  userId: req.session.userId, userName: req.session.userName, frete: req.session.frete   });
    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  }
}