const { Livro } = require('../models');

module.exports = {
  index: async (req, res) => {
    const livros = await Livro.findAll({
      order: [
        ['id', 'desc']
      ]
    });
    res.render('todososlivros', { livros });
  }
}