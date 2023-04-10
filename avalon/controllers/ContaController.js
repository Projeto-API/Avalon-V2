const fs = require('fs');
const path = require('path');

const { Usuario } = require('../models');

module.exports = {
  index: async (req, res) => {
    try {
      const { id } = req.params

      const usuarios = await Usuario.findByPk(id)

      res.render('conta', { usuarios, userId: req.session.userId, userName: req.session.userName  });
    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  form: async (req, res) => {
    try {
      const { id } = req.params

      const usuarios = await Usuario.findByPk(id)

      res.render('editarConta', { userId: req.session.userId, userName: req.session.userName });

    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  editar: async (req, res) => {
    try {
      const { id } = req.params

      const { email, nome, sobrenome, doc_identificacao, genero, data_nascimento, cep, estado, cidade, endereco, numero, complemento, foto } = req.body



      await Usuario.update({ email, nome, sobrenome, doc_identificacao, genero, data_nascimento, cep, estado, cidade, endereco, numero, complemento, foto },
        {
          where: { id }
        })

      res.redirect('/users/conta/' + userId);

    } catch (erro) {
      console.log(erro)
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  deslogar: async (req, res) => {
    try {
      await req.session.destroy(function () {
        res.redirect('/');
      });

    } catch (erro) {
      console.log(erro)
    }
  }
}