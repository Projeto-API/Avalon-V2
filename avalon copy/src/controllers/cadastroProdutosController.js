const cadastroProdutosModel = require('../models/cadastroProdutosModel')

module.exports = {
    listacadastroProdutos: (req, res) => {
        const cadastroProdutos = cadastroProdutosModel.index();
       
        res.render('cadastroProdutos', { title: 'Express', css: 'cadastroProdutos', cadastroProdutos });
    }
}