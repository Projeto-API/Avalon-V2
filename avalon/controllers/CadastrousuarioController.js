const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');




module.exports = {
  index: async (req, res) => {
    try { 
      res.render('cadastroUsuario')

    } catch (erro) {
      console.log(erro)
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },


  criar: async (req, res) => {
    try {
      const { email, password, nome, sobrenome, data_nascimento, doc_identificacao, cep, endereco, foto } = req.body
      console.log('estou aparecendo', req.body)
     const senhacripto = bcrypt.hashSync(password, 10);
     console.log('amigo estou aqui')
      await Usuario.create({ email, password: senhacripto, nome, sobrenome, data_nascimento, doc_identificacao, cep, endereco, foto, tipo:"" })
console.log('tambem estou ')
      res.redirect('/users/login');

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  }
}