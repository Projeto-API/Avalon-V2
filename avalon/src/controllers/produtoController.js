const produtoModel = require('../models/produtoModel');


module.exports = {
  index: (req, res) => {
    const servicos = ServicoModel.index(); // <--- Pedindo os dados para o modelo

    return res.render('servicos', { servicos }); // ----->  Enviando os dados para a view
  },

  admin: (req, res) => {
    const produtos = produtoModel.index();
    return res.render('crud', { produtos });
  },

  editar: (req, res) => {
    const { id } = req.params;
    let produto = null

    if (id) {
      produto = produtoModel.buscar(id);
    }

    return res.render('cadastro-edicao', { produto, errors: {} });
  },

  criar: (req, res) => {
    produtoModel.criar(req.body);
    return res.redirect('/produto/admin');

  },

  deletar: (req, res) => {
    const { id } = req.params;
    produtoModel.deletar(id);
    return res.redirect('/produto/admin');
  }
};
