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

  buscar: (req, res) => {
    const produtos = produtoModel.buscar(req)
    res.render('crud', { produtos })
},
  buscarporid: (req, res) => {
  
    const produtos = produtoModel.buscarId(req)
    console.log("req em prod", req.id)
  // console.log("Produtos", produtos)
  res.render('editarProduto', { produtos })
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



