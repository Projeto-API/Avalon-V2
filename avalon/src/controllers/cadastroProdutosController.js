const cadastroProdutosModel = require('../models/cadastroProdutosModel');
const { validationResult } = require('express-validator');
const e = require('express');

module.exports = {
    listacadastroProdutos: (req, res) => {
        const cadastroProdutos = cadastroProdutosModel.index();
       
        res.render('cadastroProdutos', { title: 'Express', css: 'cadastroProdutos', cadastroProdutos });
    },

    //Validações Cadastro Produtos:
    register: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()){

        } else {
            res.render('register', {errors: errors.mapped(), old: req.body});
        }
    }
}