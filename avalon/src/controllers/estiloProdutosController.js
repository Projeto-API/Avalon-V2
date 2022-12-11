const produtosModel = require('../models/estiloProdutosModel')

module.exports = {
    listaestiloProdutos: (req, res) => {
        const estiloProdutos = produtosModel.index();
       
        res.render('estiloProdutos', { title: 'Express', css: 'estiloProdutos', estiloProdutos, javascripts: "/javascripts/adicionarCarrinho.js" });
    },

    // listaLivros: (req, res) => {
    //     const estiloProdutos = ServicoModel.index();
    //     //res.render('VIEW', {Objeto})
    //     return res.render('estiloProdutos', {listaLivros: livroProduto, title: "Livros", javascripts: "/javascripts/adicionarCarrinho.js"})
    // },


}