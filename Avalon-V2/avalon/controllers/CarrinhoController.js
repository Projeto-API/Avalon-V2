const { where } = require('sequelize');
const { Carrinho, Livro, TodososlivrosModel } = require('../models');

const CarrinhoController = {
  carrinho: async (req, res) => {
    try {
      const carrinhoFinal = [];
      let pegaDados = await Carrinho.findAll({ where: { usuarios_id: 1 } });
      for (const carrinho of pegaDados) {
        const livro = await Livro.findOne({ where: { id: carrinho.livros_id } });
        carrinhoFinal.push({
          carrinho: carrinho,
          imagem: livro.imagens,
          titulo: livro.titulo,
          preco: livro.preco,
        });
      }
      res.render('carrinho', { carrinho: carrinhoFinal });
    } catch (erro) {
      let alert = require('alert');
      console.log('Oops!');
      alert('Something went wrong');
    }
  },
  add: async (req, res) => {
    const livros = JSON.parse(req.body.produtos);
    console.log(livros);
    // Carrinho.add(livro);
    res.redirect('/carrinho');
  },
  remove: async (req, res) => {
    const { produtoId } = req.body;
    await Carrinho.destroy({
      where: {
        id: produtoId,
      },
    });
    res.redirect('/carrinho');
  },
  teste: async (req, res) => {
    var convert = JSON.parse(req.body.produtosCarrinho);
    try {
      console.log('Array: ' + JSON.stringify(convert));
      for (const element of convert) {
        const objLivroCarrinho = await Livro.findOne({ where: { titulo: element.productTitle } });
        const carrinhoSalvo = await Carrinho.create({ quantidade: element.productQuantity, livros_id: objLivroCarrinho.id, usuarios_id: 1 });
      }
      res.redirect('/carrinho');
    } catch (erro) {
      let alert = require('alert');
      console.log('Oops!');
      alert('Something went wrong');
    }
  },
};

module.exports = CarrinhoController;