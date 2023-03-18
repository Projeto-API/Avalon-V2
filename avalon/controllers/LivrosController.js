const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

const livrosPath = path.resolve(__dirname, '../database/livros.json');

const getLivros = () => {
  return JSON.parse(fs.readFileSync(livrosPath));
}

function saveLivros (livros) {
  fs.writeFileSync(livrosPath, JSON.stringify(livros, null, 4));
}

module.exports = {
  index(req, res) {
    res.render('biblioteca', { livros: getLivros() });
  },

  form (req, res) {
    let livro;
    let id = req.params.id;

    if (id) {
      livro = getLivros().find(livro => livro.id == id);
    }

    res.render('adicionar-livro', { livro });
  },

  criar (req, res) {
    const livros = getLivros();

    livros.push({
      id: livros.at(-1).id + 1,
      ...req.body
    });

    saveLivros(livros);
    res.redirect('/biblioteca');
  },

  editar (req, res) {
    const id = req.params.id;
    const livros = getLivros()
    const livro = livros.find(livro => livro.id == id);

    livro.titulo = req.body.titulo;
    livro.editora = req.body.editora;

    saveLivros(livros);
    res.redirect('/biblioteca');
  },

  deletar (req, res) {
    const id = req.params.id;
    let livros = getLivros();

    livros = livros.filter(livro => livro.id != id);

    saveLivros(livros);
    res.redirect('/biblioteca');
=======
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
    

    res.render('admin', { livros, editoras, categorias, autores })
  },

  async form (req, res) {
    const editoras = await Editora.findAll()
    const autores = await Autor.findAll()
    const categorias = await Categoria.findAll()

   
    let livro;
    let id = req.params.id;

    res.render('adicionarLivro', { livro: null, editoras, categorias, autores  });

  },

  async buscarLivro(req, res) {
    const { id } = req.params

    const livro = await Livro.findByPk( id )
    console.log(livro)
    const editora = await Editora.findByPk(livro.editoras_id )
    res.render('adicionarLivro', { livro, editora });

  },
  
  async criar (req, res) {
    const {titulo, preco, acabamento, sinopse, isbn, idioma, paginas, editora, autor, categoria} = req.body
    await Livro.create({titulo, preco, acabamento,sinopse, isbn, idioma, paginas, editoras_id: editora, autores_id: autor, categorias_id: categoria})
  
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
>>>>>>> igorcr
  }
}