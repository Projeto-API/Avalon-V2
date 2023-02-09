// module.exports = {
//     mostraCarrinho: (req, res) => {
//         res.render('carrinho', {js: "/js/carrinho.js"})
//     }
// }

const estiloProdutosModel = require('../models/ServicoModel')


const Carrinho = require('../models/Carrinho')
module.exports = {
    index: (req, res) => {
        const carrinho = Carrinho.findAll();
        res.render('carrinho',  { carrinho , css: 'carrinho' })
    },
    add:(req,res) =>{
        const { produtoId} =req.body;
        const estiloProdutos = estiloProdutosModel.index();
        Carrinho.add(estiloProdutos[produtoId]);
        res.redirect('/carrinho');
    },
    delete:(req,res) =>{
        console.log("oi estou aqui")
        const { produtoId} =req.body;
        Carrinho.remove(produtoId)
               
    }


}










// const ServiceLivrosModel = require('../models/ServiceLivrosModel');

// module.exports = { 
//     index: (req, res) => {
//         //controler comunicando com o model
//         const servicos = ServiceLivroModel.index();
//         //controler comunicando com a view
//         return res.render('carrinho', { servicos })
//     }
// }
