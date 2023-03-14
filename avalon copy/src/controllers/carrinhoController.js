const{ Carrinho } = require('../../models/Carrinho')

const CarrinhoController = {
    carrinho: async (req,res) => {
        let livros = await Carrinho.findAll();
        return res.render('carrinho', {livros})

    },
    add: async (req, res) => {
        const { produtoId } = await req.body;
        const estiloProdutos =  await estiloProdutosModel.index();


        Carrinho.add(estiloProdutos[produtoId]);
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