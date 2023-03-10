const fs = require('fs');
const path = require('path');
const { Livro, Editora, Autor, Categoria } = require('../models');

const livrosPath = path.resolve(__dirname, '../database/livros.json');

// const getLivros = () => {
//   return JSON.parse(fs.readFileSync(livrosPath));
// }

// function saveLivros(livros) {
//   fs.writeFileSync(livrosPath, JSON.stringify(livros, null, 4));
// }

module.exports = {
  async index(req, res) {
    const livros = await Livro.findAll();
    const editoras = await Editora.findAll();
    const autores = await Autor.findAll();
    const categorias = await Categoria.findAll();
    const data = { editoras, autores, categorias };

    res.render('admin', { livros, data })
  },

  async form (req, res) {
    const editoras = await Editora.findAll()
    const autores = await Autor.findAll()
    const categorias = await Categoria.findAll()

   
    let livro;
    let id = req.params.id;

    res.render('adicionarLivro', { livro: null, editoras, categorias, autores  });

  },

  async criar (req, res) {
    const {nome, preco, acabamento, sinopse, isbn, paginas, editora, autor,} = req.body
    await Livro.create({nome, preco, acabamento,sinopse, isbn, paginas, editoras_id: editora, autores_id: autor,})
  
    res.redirect('/admin');
  },

  async editar(req, res) {
    const { id } = req.params
    
    const { titulo, preco, acabamento, sinopse, isbn, idioma, paginas, editora, autor} = req.body

    console.log(req.body)
    await Livro.update({
      titulo, preco, acabamento, sinopse, isbn, idioma, paginas, editora, autor
    },
      {
        where: { id }
      })
    res.redirect('/admin');
  },

  async buscarLivro(req, res) {
    const { id } = req.params

    const livro = await Livro.findByPk( id )
    console.log(livro)
    const editora = await Editora.findByPk(livro.editoras_id )
    res.render('adicionarLivro', { livro, editora });

  },

  async deletar(req, res) {
    const { id } = req.params

    try {

      await Livro.destroy({
        where: {
          id
        }
      })
    } catch (error) {
      console.log("erro ao deletar livro", error)
    }
    console.log("O produto de id " + req.body.id + " foi deletado com sucesso");
    return res.redirect('/admin');
  }
}