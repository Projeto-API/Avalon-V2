const carrinho = require('../models/Carrinho');
const Produto = require('../models/produtoModel');

module.exports = {
  index: (req, res) => {
    const carrinho = carrinho.findAll();
    // const produto = Produto.findAllById(carrinho.map(id => +id));

    res.render('carrinho', { produto });
  },

  add: (req, res) => {
    const { produtoId } = req.body;
    carrinho.add(produtoId);
    res.redirect('/carrinho');
  },

  remove: (req, res) => {
    const { id } = req.params;
    carrinho.remove(id);
    res.redirect('/carrinho');
  }
}