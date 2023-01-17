const produtoModel = require('../models/produtoModel');


module.exports = {
  index: (req, res) => {
    const produtos = produtoModel.index(); // <--- Pedindo os dados para o modelo

    return res.render('produtos', { produtos }); // ----->  Enviando os dados para a view
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
    let { errors } = validationResult(req);

    if (errors.length) {
      const errosFormatados = {};
      errors.forEach(erro => errosFormatados[erro.param] = erro.msg);

      return res.render('cadastro-edicao', { errors: errosFormatados, produto: null });
    }

    produtoModel.criar(req.body);
    return res.redirect('/admin');
  },

  atualizar: (req, res) => {
    const { id } = req.params;
    let { errors } = validationResult(req);

    if (errors.length) {
      const errosFormatados = {};
      errors.forEach(erro => errosFormatados[erro.param] = erro.msg);

      return res.render('cadastro-edicao', {
        errors: errosFormatados,
        produto: { id, ...req.body }
      });
    }

    produtoModel.atualizar(id, req.body);
    return res.redirect('/admin');
  },

  deletar: (req, res) => {
    const { id } = req.params;
    produtoModel.deletar(id);
    return res.redirect('/admin');
  }
};