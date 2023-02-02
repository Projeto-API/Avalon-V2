const produtoModel = require('../models/produtoModel');



module.exports = {
  index: (req, res) => {
    const produtos = produtoModel.index(); // <--- Pedindo os dados para o modelo

    return res.render('produtos', { produtos }); // ----->  Enviando os dados para a view
  },

  admin: (req, res) => {
    const produtos = produtoModel.index();
    return res.render('crud', { produtos });
  },


  criar: (req, res) => {

    produtoModel.criar(req.body);
    return res.redirect('/produto/admin');

  },

  editar: (req, res) => {
    produtoModel.editar(req);
    res.send("O produto de id " + req.body.id + " foi atualizado com sucesso")
    },
  

  deletar: (req, res) => {
    const { id } = req.params;
    produtoModel.deletar(id);


    console.log("O produto de id " + req.body.id + " foi deletado com sucesso");
    return res.redirect('/produto/admin')
  }
};



