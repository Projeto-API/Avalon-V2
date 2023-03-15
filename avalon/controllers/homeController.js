const { Livro, Editora, Autor, Categoria } = require('../models');

module.exports = {
    async index(req, res) {
        const livros = await Livro.findAll();
        const editoras = await Editora.findAll();
        const autores = await Autor.findAll();
        const categorias = await Categoria.findAll();
    
    
        res.render('home', { livros, editoras, categorias, autores })
      },
    
}