const { Cliente } = require('../models');

module.exports = {
    index: async (req, res) => {
  
      res.render('cadastroUsuario');
    },

    async criar(req, res) {
      const { nome, sobrenome, doc_identificacao, data_nascimento, email, senha, cep, endereco } = req.body;
      const foto = req.files.foto[0].filename;
      await Cliente.create({ nome, sobrenome, doc_identificacao, data_nascimento, email, senha, cep, endereco, foto })
  
      res.redirect('/users/login');
    }
  }