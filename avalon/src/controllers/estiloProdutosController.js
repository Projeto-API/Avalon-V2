const produtosModel = require('../models/produtosModel');

module.exports = {
    index: (req, res)=> {
        const estiloProdutos = produtosModel.index();
        return res.render('estiloProdutos', {estiloProdutos, javascripts: "/javascripts/adicionarAoCarrinho.js"})
    }
}