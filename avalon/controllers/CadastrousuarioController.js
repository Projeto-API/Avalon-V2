const { Cliente } = require('../models');

module.exports = {
  index: async (req, res) => {
    try {
      res.render('cadastroUsuario');
    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  },

  async criar(req, res) {
    console.log("cheguei")
    try {
      const { nome, sobrenome, doc_identificacao, data_nascimento, email, senha, cep, endereco } = req.body;
      // const foto = req.files.foto?.[0].filename;
      await Cliente.create({ nome, sobrenome, doc_identificacao, data_nascimento, email, senha, cep, endereco })

      res.redirect('/users/login');
    } catch (erro) {
     
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  }
}