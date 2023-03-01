const { Sinopse } = require('../models');

module.exports = {
  index: async (req, res) => {
    const sinopse = await Sinopse.findAll({
      order: [
        ['nome', 'desc']
      ]
    });
    res.render('sinopse', { sinopse });
  }
}