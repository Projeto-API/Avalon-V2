const { Livro } = require('../models');

module.exports = {
  async index(req, res) {
    const livros = await Livro.findAll();
   

    res.render('todososlivros', { livros})


  },
  }
