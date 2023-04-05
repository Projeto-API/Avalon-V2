const { where } = require('sequelize');
const { Carrinho, Livro , TodososlivrosModel } = require('../models');
const CarrinhoController = {
  carrinho: async (req, res) => {
    try{
      const carrinhoFinal = []
    let pegaDados = await Carrinho.findAll({where: {usuarios_id: 1 }})
    pegaDados.forEach(carrinho =>
      
      {
      const livro = Livro.findOne({where :{id: carrinho.livros_id} })
      console.log("estou aqui livro" + livro)
      
      carrinhoFinal.push(carrinho,livro.imagens, livro.titulo , livro.preco )
       
    })
    console.log("estou aqui carrinhoFinal salvo" + carrinhoFinal)

    res.render('carrinho', {carrinho : carrinhoFinal });

    
    // let valorFrete = null;
    // Carrinho.findAll().then(dentroCarrinho => {
    //   let total = 0;
    //   dentroCarrinho.forEach(unid => {
    //     let itemTotal = unid.quantidade * unid.livros_id.preco;
    //     total += itemTotal;
    // });
    // return res.render('carrinho', { dentroCarrinho, valorFrete, total });

  } catch (erro) {
    let alert = require('alert');
    console.log('Ferrou !');
    alert("deu M....")
  }
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
    var convert = JSON.parse(req.body.produtosCarrinho);
    
    try {
      console.log('Array: ' + JSON.stringify(convert))
      // console.log("entrei no Try")

      convert.forEach(async element =>{
        const objLivroCarrinho = await Livro.findOne({ where: { titulo: element.productTitle } });
        // console.log('Titulo Crrinho : '+ objLivroCarrinho.titulo)
        // console.log('Quantidade: ' + element.productQuantity)
        const carrinhoSalvo = await Carrinho.create({ quantidade: element.productQuantity , livros_id: objLivroCarrinho.id ,usuarios_id: 1 })

        
          
      });



        // const listaLivros = JSON.stringify(produtosJson);
      // console.log("lista de produto" + listaLivros );
      // Add each book in listaLivros to the shopping cart
      // for (const livro of listaLivros) {
      //   await Carrinho.create({
      //     titulo: livro.productTitle,
      //     autor: livro.productAuthor,
      //     preco: livro.productPrice,
      //     quantidade: 1 // assuming the default quantity is 1
      //   });
         res.redirect('/carrinho');

    } catch (erro) {
      let alert = require('alert');
      console.log('Ferrou !');
      alert("deu M....")
    }
  }
};
module.exports = CarrinhoController;