const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const { Livro, Usuario } = require('../models');

Op


module.exports = {
  index: async (req, res) => {
    try {

      const livros = await Livro.findAll();
      const cliente = await Usuario.findAll();

      res.render('checkout', { livros, cliente, userId: req.session.userId, userName: req.session.userName  });
    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  }
}