const Carrinho = require('../models/Carrinho')
module.exports = {
    index: (req, res) => {
        const carrinho = Carrinho.findAll();
        res.render('carrinho',  { carrinho , css: 'carrinho' })
    },
    add:(req,res) =>{
        const { produtoId} =req.body;
        Carrinho.add(produtoId);
        res.redirect('/carrinho');
    }
}