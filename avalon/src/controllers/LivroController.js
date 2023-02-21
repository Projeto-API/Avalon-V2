const { editModal } = require('../models/LivroModel');
const LivroModel = require('../models/LivroModel');


module.exports = {
  index: (req, res) => {
    const Livros = LivroModel.index(); // <--- Pedindo os dados para o modelo

    return res.render('Livros', { Livros }); // ----->  Enviando os dados para a view
  },

  admin: (req, res) => {
    const Livros = LivroModel.index();
    return res.render('crud', { Livros });
  },


  criar: (req, res) => {

    LivroModel.criar(req.body);
    return res.redirect('/Livro/admin');

  },

  buscar: (req, res) => {
    const Livros = LivroModel.buscar(req)
    res.render('crud', { Livros })
  },


   atualizar: (req, res) => {
    LivroModel.editar(req);
    console.log("O Livro de id " + req.body.id + " foi editado com sucesso");
    return res.redirect('/Livro/admin');
  },


  deletar: (req, res) => {
    const { id } = req.params;
    LivroModel.deletar(id);


    console.log("O Livro de id " + req.body.id + " foi deletado com sucesso");
    return res.redirect('/Livro/admin')
  }
 //// -----BANCO DE DADOS ----- ////
 








};



