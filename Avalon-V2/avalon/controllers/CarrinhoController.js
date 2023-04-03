const { Carrinho, TodososlivrosModel } = require('../models');
const CarrinhoController = {
  carrinho: async (req, res) => {
    let valorFrete = null;
    let livros = await Carrinho.findAll();
    let total = 0;
    livros.forEach(livro => {
      let itemTotal = livro.quantidade * livro.preco;
      total += itemTotal;
    });
    return res.render('carrinho', { livros, valorFrete, total });
  },
  add: async (req, res) => {
    const livros = JSON.parse(req.body.produtos)
    console.log(livros)
    // Carrinho.add(livro);
    res.redirect('/carrinho');
  },
  remove: async (req, res) => {
    const { produtoId } = req.body;
    await Carrinho.destroy({
      where: {
        id: produtoId
      }
    });
    res.redirect('/carrinho');
  },
  teste: async (req, res) => {
    try {
      const { produtosJson } = req.body;
      const listaLivros = JSON.parse(produtosJson);
      console.log("lista de produto",listaLivros )
      // Add each book in listaLivros to the shopping cart
      for (const livro of listaLivros) {
        await Carrinho.create({
          titulo: livro.productTitle,
          autor: livro.productAuthor,
          preco: livro.productPrice,
          quantidade: 1 // assuming the default quantity is 1
        });
        res.redirect('/carrinho');
      }
    } catch (erro) {
      let alert = require('alert');
      alert("ERRO 500 - Erro interno do servidor!")
    }
  }
};
module.exports = CarrinhoController;