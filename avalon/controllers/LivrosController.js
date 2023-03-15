
// const getLivros = () => {
//   return JSON.parse(fs.readFileSync(livrosPath));
// }

// function saveLivros(livros) {
//   fs.writeFileSync(livrosPath, JSON.stringify(livros, null, 4));
// }


const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const { Livro, Editora, Autor, Categoria } = require('../models');

Op



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
    const { titulo, preco, acabamento, sinopse, isbn, idioma, ano, paginas, editora, autor, categoria, imagens } = req.body
    const capa = req.files.capa[0].filename;
    await Livro.create({ titulo, preco, acabamento, sinopse, isbn, idioma, ano, paginas, editoras_id: editora, autores_id: autor, categorias_id: categoria, capa, imagens })

    res.redirect('/admin');
  },

  async editar(req, res) {
    const { id } = req.params

    const { titulo, preco, acabamento, sinopse, isbn, idioma, ano, paginas, editora, autor, capaguardada } = req.body
    
    const capaupload = req.files.capa?.[0].filename;
    console.log(capaguardada)
    console.log(req.body)
    await Livro.update({ titulo, preco, acabamento, sinopse, isbn, idioma, ano, paginas, editora, autor, capa:capaupload? capaupload: capaguardada },
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