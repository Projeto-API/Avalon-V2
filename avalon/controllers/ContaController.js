const fs = require('fs');
const path = require('path');

const { Usuario } = require('../models');

module.exports = {
  index: async (req, res) => {
    try {
      const { id } = req.params

      const usuarios = await Usuario.findByPk(id)
 
      res.render('conta', { usuarios, userId: req.session.userId });
    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  form: async (req, res) => {
    try {
      const { id } = req.params

      const usuarios = await Usuario.findByPk(id)
     
      res.render('editarConta', { usuarios, userId: req.session.userId  });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  }
}