const estiloProdutosModel = require('../models/estiloProdutosModel');
const produtosModel = require('../models/estiloProdutosModel')

module.exports = {
    listaEstiloProdutos: (req, res) => {
        const estiloProdutos = produtosModel.index();
       
        res.render('estiloProdutos', { title: 'Express', css: 'estiloProdutos', listaEstiloProdutos: estiloProdutos, estiloProdutos, javascripts: "/javascripts/adicionarCarrinho.js" });
    },


}