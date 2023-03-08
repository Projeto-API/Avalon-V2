// const { editModal } = require('../models/LivroModel');
// const LivroModel = require('../models/LivroModel');


// module.exports = {
//   index: (req, res) => {
//     const Livros = LivroModel.index(); // <--- Pedindo os dados para o modelo

//     return res.render('Livros', { Livros }); // ----->  Enviando os dados para a view
//   },

//   admin: (req, res) => {
//     const Livros = LivroModel.index();
//     return res.render('crud', { Livros });
//   },


//   criar: (req, res) => {

//     LivroModel.criar(req.body);
//     return res.redirect('/Livro/admin');

//   },

//   buscar: (req, res) => {
//     const Livros = LivroModel.buscar(req)
//     res.render('crud', { Livros })
//   },


//    atualizar: (req, res) => {
//     LivroModel.editar(req);
//     console.log("O Livro de id " + req.body.id + " foi editado com sucesso");
//     return res.redirect('/Livro/admin');
//   },


//   deletar: (req, res) => {
//     const { id } = req.params;
//     LivroModel.deletar(id);


//     console.log("O Livro de id " + req.body.id + " foi deletado com sucesso");
//     return res.redirect('/Livro/admin')
//   }
// };

const { Produto, Editora, Autor, Categoria } = require('../models')





module.exports = {
  async index(req, res) {
    const produtos = await Produto.findAll();
    const editoras = await Editora.findAll({order: [['nome']]})
    const autores = await Autor.findAll({order: [['nome']]})
    const categorias = await Categoria.findAll({order: [['tipo']]})
    const data = {
      editoras, autores, categorias, produtos
    }

    res.render('admin', { title: 'Express', css: 'crud', data })
  },

  criar: async (req, res) => {
    const { titulo, preco, idioma,
      paginas, acabamento } = req.body;
    await Editora.create({
      titulo, preco, idioma,
      paginas, acabamento
    });

    res.redirect('/admin');
  },

  async deletar(req, res) {
    const id = req.params.id;
    await Produto.destroy({
      where: {
        id
      }
    })

    res.redirect('/admin');
  }

}

