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
      const { email, password, nome, sobrenome, generop, data_nascimento, doc_identificacao, cep, endereco, cidade, estado, numero, complemento, foto } = req.body
      console.log('estou aparecendo', req.body)
      const senhacripto = bcrypt.hashSync(password, 10);
      console.log('amigo estou aqui', senhacripto)
      await Usuario.create({ email, password: senhacripto, nome, sobrenome, generop, data_nascimento, doc_identificacao, cep, endereco, cidade, estado, numero, complemento, foto, tipo: "" })
      console.log('tambem estou ')
      res.redirect('/users/login');

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  form: async (req, res) => {
    try {
      res.render('editarConta', {userId: req.session.userId, userName: req.session.userName });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },


  editar: async (req, res) => {
    try {
      // await Livro.update({ titulo, preco, acabamento, sinopse, isbn, idioma, ano, paginas, editora, autor, capa: capaupload ? capaupload : capaguardada })
      res.redirect('/editar-conta');

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  }
}