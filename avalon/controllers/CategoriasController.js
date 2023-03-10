const { Categoria } = require('../models');

module.exports = {
  index: async (req, res) => {
    const categorias = await Categoria.findAll({
      order: [
        ['nome', 'desc']
      ]
    });
    res.render('categorias', { categorias });
  }
}