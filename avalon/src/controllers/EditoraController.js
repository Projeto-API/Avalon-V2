const { Editora } = require('../models')

module.exports = {
  async index(req, res) {
    // const autores = await Editora.findAll();
    res.render('crudEditora', { title: 'Express', css: 'crud' })

  }
}