const produtoModel = require('../models/produtoModel');
const { validationResult } = require('express-validator');

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

  excluir: (req, res) => {
    const { id } = req.params;   let { errors } = validationResult(req);    produtoModel.excluir(id);
    if (errors.length) {
        const errosFormatados = {};
        errors.forEach(erro => errosFormatados[erro.param] = erro.msg);
        return res.render('excluir', {
            errors: errosFormatados,
            produto: { id, ...req.body }
          });
        }
        produtoModel.excluir(id, req.body);
        res.send("O produto de id " + req.body.id + " foi deletado com sucesso")
      }}