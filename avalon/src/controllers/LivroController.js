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

const { Produto } = require('../models')
const { Categoria } = require('../models')




module.exports = {
  async index(req, res) {
    const produtos = await Produto.findAll();
    res.render('admin', { title: 'Express', css: 'crud', produtos })
  },

  async editora (req, res) {
    const editoras = await Editora.findAll();
    res.render('admin', { title: 'Express', css: 'crud', editoras })
  },
  
  async categoria (req, res) {
    const categorias = await Categoria.findAll();
    res.render('admin', { title: 'Express', css: 'crud', categorias })
  },

  // criar: async (req, res) => {
  //   const { categoria, titulo, preco, editora_id, idioma,
  //     paginas, acabamento } = req.body;
  //   await Produto.create({
  //     categoria, titulo, preco, editoras_id: editor, idioma,
  //     paginas, acabamento
  //   });

  //   res.redirect('/admin');
  // },


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

