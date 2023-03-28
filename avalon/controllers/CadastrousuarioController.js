const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const { Usuario } = require('../models');

Op



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

      await Usuario.create({ email, password, nome, sobrenome, data_nascimento, doc_identificacao, cep, endereco, foto })

      res.redirect('/users/login');

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  form: async (req, res) => {
    try {
      res.render('editarConta');

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