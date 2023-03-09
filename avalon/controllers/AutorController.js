const { Autor } = require('../models')

module.exports = {
  async index(req, res) {
    const autores = await Autor.findAll();
    res.render('autores', { title: 'Express', css: 'crud', autores })

  },

  async deletar(req, res) {
    const  id = req.params.id;
    await Autor.destroy({
      where: {
        id
      }
    })

    res.redirect('/admin/autores');
  }
}