const { Livro, Editora, Categoria, Autor } = require('../models');

module.exports = {
  index: async (req, res) => {
    const { id } = req.params
    const carrousel = await Livro.findAll();
    const livro = await Livro.findByPk(id);
    const editora = await Editora.findAll();
    const categoria = await Categoria.findAll();
    const autor = await Autor.findAll();
    

    res.render('sinopse', { carrousel, livro, editora, categoria, autor } );
    
  }
}