const { Categoria } = require('../models')

module.exports = {
  async index(req, res) {
    // const autores = await Categoria.findAll();
    res.render('crudCategoria', { title: 'Express', css: 'crud' })

  }
}