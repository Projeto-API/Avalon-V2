const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const { Livro, Editora, Autor, Categoria } = require('../models');
Op

const livrosPath = path.resolve(__dirname, '../database/livros.json');

const ERRO_500 = 'Erro interno do servidor!';
const ERRO_404 = 'Livro não encontrado!';
const ERRO_400 = 'Request inválido!';

class NotFoundError extends Error {
  constructor() {
    super(ERRO_404);
    this.name = 'NOT_FOUND';
  }
}

module.exports = {
  async index(req, res) {
    const livros = await Livro.findAll();
    const editoras = await Editora.findAll();
    const autores = await Autor.findAll();
    const categorias = await Categoria.findAll();


    res.render('admin', { livros, editoras, categorias, autores })
  },

  search: async (req, res) => {
    const { search } = req.query;
    const livros = await Livro.findAll({
      where: search ? {
        [Op.or]: [
          { titulo: { [Op.like]: '%' + search + '%' } },
          { id: search }
        ]
      } : null
    });

    res.render('admin', { livros })
  },

  async form(req, res) {
    const editoras = await Editora.findAll()
    const autores = await Autor.findAll()
    const categorias = await Categoria.findAll()

    let livro;
    let id = req.params.id;

    res.render('adicionarLivro', { livro: null, editoras, categorias, autores });

  },

  async buscarLivro(req, res) {
    const { id } = req.params

    const livro = await Livro.findByPk(id)
    const editoras = await Editora.findAll()
    const categorias = await Categoria.findAll()
    const autores = await Autor.findAll()

    console.log(livro)
    res.render('adicionarLivro', { livro, editoras, categorias, autores });

  },

  async criar(req, res) {
    try{
    const { titulo, preco, acabamento, sinopse, isbn, idioma, paginas, editora, autor, categoria } = req.body
    await Livro.create({ titulo, preco, acabamento, sinopse, isbn, idioma, paginas, editoras_id: editora, autores_id: autor, categorias_id: categoria })
return res.status(204).json();
    } catch (erro){
      console.log('Erro ao adiconar novo livro');
      if (erro?.name === 'SequelizeValidationError') {
        return res.status(400).json({mensagem: ERRO_400});
      }
      return res.status(500).json({mensagem: ERRO_500});
    }
    res.redirect('/admin');
  },

  async editar(req, res) {
    const { id } = req.params

    const { titulo, preco, acabamento, sinopse, isbn, idioma, paginas, editora, autor } = req.body

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
  }
}