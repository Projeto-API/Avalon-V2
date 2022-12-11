const estiloProdutosModel = require('../models/estiloProdutosModel')

module.exports = {
    listaestiloProdutos: (req, res) => {
        const estiloProdutos = estiloProdutosModel.index();
       
        res.render('estiloProdutos', { title: 'Express', css: 'estiloProdutos', estiloProdutos });
    }
}