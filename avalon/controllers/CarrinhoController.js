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
    // const livros = JSON.parse(req.body.produtos);
    // console.log(livros);
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
    try {      
      var convert = JSON.parse(req.body.produtosCarrinhoFinal);
      
      for (const element of convert) {
        const objLivroCarrinho = await Livro.findOne({ where: { titulo: element.productTitle } });
        const carrinhoSalvo = await Carrinho.create({ quantidade: element.productQuantity, livros_id: objLivroCarrinho.id, usuarios_id: 1 });
      }
      res.redirect('/carrinho');
    } catch (erro) {
      let alert = require('alert');
      console.log('Oops!');
      console.log(erro);
      
      alert('Something went wrong');
    }
  },




};

module.exports = CarrinhoController;