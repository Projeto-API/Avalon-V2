const { Todososlivros } = require('../models');

module.exports = {
  index: async (req, res) => {
    const todososlivros = await Todososlivros.findAll({
      order: [
        ['nome', 'desc']
      ]
    });
    res.render('todososlivros', { todososlivros });
  }
}