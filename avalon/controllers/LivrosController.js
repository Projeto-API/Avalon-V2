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
    const {nome, editora, autor,} = req.body
    await Livro.create({nome, editoras_id: editora, autores_id: autor,})
    
    res.redirect('/admin');
  },

  async editar (req, res) {
console.log('amigo estou aqui')
    const {nome, editora, autor, id} = req.body

    console.log(req.body)
    await Livro.update({
        nome, editoras_id: editora, autores_id: autor
    },
        {
            where: {id} 
 })
    res.redirect('/admin');
  },

 async buscarLivro (req, res){
  const {id} = req.params


  const livro = await Livro.findOne({id})
  console.log(livro)
  const editora = await Editora.findOne({id:livro.editoras_id})
  res.render('editar-livro', {livro, editora});

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