const fs = require('fs');
const path = require('path');
const { Livro, Editora, Autor } = require('../models');

const livrosPath = path.resolve(__dirname, '../database/livros.json');

const getLivros = () => {
  return JSON.parse(fs.readFileSync(livrosPath));
}

function saveLivros (livros) {
  fs.writeFileSync(livrosPath, JSON.stringify(livros, null, 4));
}

module.exports = {
  async index(req, res) {
    const livros = await Livro.findAll({
      include: [
        { model: Editora, as: 'editora', require: true }
      ],
    });
    res.render('admin', { livros });
  },

  async form (req, res) {
    const editoras = await Editora.findAll()
    const autores = await Autor.findAll()
    let livro;
    let id = req.params.id;

   
    res.render('adicionar-livro', { livro: null, editoras, autores });
  },

  async criar (req, res) {
    const {titulo, editora, autores,} = req.body
    await Livro.create({titulo, editoras_id: editora, autores_id: autores,})
    
    res.redirect('/admin');
  },

  editar (req, res) {
    const id = req.params.id;
    const livros = getLivros()
    const livro = livros.find(livro => livro.id == id);

    livro.titulo = req.body.titulo;
    livro.editora = req.body.editora;

    saveLivros(livros);
    res.redirect('/admin');
  },

  async deletar (req, res) {
    const {id} = req.params
 
    try {
      
      await Livro.destroy ({where:{
        id
      }})
    } catch (error) {
     console.log("erro ao deletar livro", error) 
    }
    console.log("O produto de id " + req.body.id + " foi deletado com sucesso");
    return res.redirect('/admin');
  }
}