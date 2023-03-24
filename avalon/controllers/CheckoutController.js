
const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const { Livro, Cliente } = require('../models');

Op


module.exports = {
  index: async (req, res) => {
    try {


      res.render('checkout');
    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  }
}