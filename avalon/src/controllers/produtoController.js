const produtoModel = require('../models/produtoModel')

module.exports = {
    listaproduto: (req, res) => {
        const produto = produtoModel.produto();
       
        res.render('cadastroProdutos', { title: 'Express', css: 'cadastroProdutos',produto });
    }
}