const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const { Usuario } = require('../models');

Op


module.exports = {
  index: async (req, res) => {
    try {
      const { id } = req.params

      const usuarios = await Usuario.findByPk(id)

      res.render('compraEfetuada', { usuarios,  userId: req.session.userId, userName: req.session.userName   });
    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  }
}