const { Categoria } = require('../models');

module.exports = {
  index: async (req, res) => {
    const categorias = await Categoria.findAll({
      order: [
        ['nome', 'asc']
      ]
    });
    res.render('categorias', { categorias });
  }
}