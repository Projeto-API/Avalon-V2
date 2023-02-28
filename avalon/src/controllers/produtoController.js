// const { editModal } = require('../models/produtoModel');
// const produtoModel = require('../models/produtoModel');


// module.exports = {
//   index: (req, res) => {
//     const produtos = produtoModel.index(); // <--- Pedindo os dados para o modelo

//     return res.render('produtos', { produtos }); // ----->  Enviando os dados para a view
//   },

//   admin: (req, res) => {
//     const produtos = produtoModel.index();
//     return res.render('crud', { produtos });
//   },


//   criar: (req, res) => {

//     produtoModel.criar(req.body);
//     return res.redirect('/produto/admin');

//   },

//   buscar: (req, res) => {
//     const produtos = produtoModel.buscar(req)
//     res.render('crud', { produtos })
//   },


//    atualizar: (req, res) => {
//     produtoModel.editar(id, req.body);
//     console.log("O produto de id " + req.body.id + " foi editado com sucesso");
//     return res.redirect('/produto/admin');
//   },


//   deletar: (req, res) => {
//     const { id } = req.params;
//     produtoModel.deletar(id);


//     console.log("O produto de id " + req.body.id + " foi deletado com sucesso");
//     return res.redirect('/produto/admin')
//   }
// };



