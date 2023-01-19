const produtoModel = require('../models/produtoModel');


module.exports = {
  index: (req, res) => {
    const servicos = ServicoModel.index(); // <--- Pedindo os dados para o modelo

    return res.render('servicos', { servicos }); // ----->  Enviando os dados para a view
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

  buscar: (req, res) => {

    res.send(produtoModel.findOne(req))
},


  deletar: (req, res) => {
    const { id } = req.params;
    produtoModel.deletar(id);
    
    res.send("O produto de id " + req.body.id + " foi deletado com sucesso")
  }
};



