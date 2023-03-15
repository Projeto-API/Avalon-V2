const{ Carrinho } = require('../models')

const CarrinhoController = {
    carrinho: async (req,res) => {
        let livros = await Carrinho.findAll();
        return res.render('carrinho', {livros})

    },
    add: async (req, res) => {
        const { produtoId } = await req.body;
        const todososlivros =  await TodososlivrosModel.index();


        Carrinho.add(todososlivros[produtoId]);
        res.redirect('/carrinho');
    },
    remove: async (req, res) => {
        const { produtoId } = req.body;
        await Carrinho.destroy({
            where: {
              id: produtoId
            }
          });
        res.redirect('/carrinho');
    }
    
}

module.exports = CarrinhoController
