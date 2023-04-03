const { Carrinho, TodososlivrosModel } = require('../models');

// const puppeteer = require('puppeteer');

const CarrinhoController = {
    carrinho: async (req,res) => {
        let livros = await Carrinho.findAll();
        // const browser = await puppeteer.launch();
        // const page = await browser.newPage();
        // await page.goto('http://localhost:3000/');
        // console.log(page)
        // const dados = await page.evaluate(() => {
        //     return JSON.parse(sessionStorage.getItem('carrinho'));
        //   });
        
        //   // Fechando o navegador
        //   await browser.close();
        
        //   // Fazendo algo com os dados recuperados
        //   console.log(dados);
        return res.render('carrinho', {livros})
    },
    add: async (req, res) => {
        const { produtoId } = await req.body;
        const estiloProdutos =  await estiloProdutosModel.index();
        Carrinho.add(estiloProdutos[produtoId]);
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
    }
    // teste: async (req, res) => {
    //     try {
    //       const { produtosJson } = req.body;
    //       const listaLivros = JSON.parse(produtosJson);
    //       console.log("lista de produto",listaLivros )
      
    //       // Add each book in listaLivros to the shopping cart
    //       for (const livro of listaLivros) {
    //         await Carrinho.create({
    //           titulo: livro.productTitle,
    //           autor: livro.productAuthor,
    //           preco: livro.productPrice,
    //           quantidade: 1 // assuming the default quantity is 1
    //         });

    //         res.redirect('/carrinho');
    //       }
    //     }
      };
        


module.exports = CarrinhoController;