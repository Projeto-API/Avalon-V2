const { Livro } = require('../models');

module.exports = {
  index: async (req, res) => {
    const { id } = req.params

    const livro = await Livro.findByPk(id)
       
    res.render('sinopse', { livro } );
    
  }
}