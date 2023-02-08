// module.exports = {
//     mostraCarrinho: (req, res) => {
//         res.render('carrinho', {js: "/js/carrinho.js"})
//     }
// }

const Carrinho = require('../models/Carrinho')
module.exports = {
    index: (req, res) => {
        const carrinho = Carrinho.findAll();
        res.render('carrinho',  { carrinho , css: 'carrinho' })
    },
    add:(req,res) =>{
        const { produtoId} =req.body;
        Carrinho.add(produtoId, nome);
        res.redirect('/carrinho');
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
