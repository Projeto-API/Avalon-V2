const { Categoria } = require('../models')

module.exports = {
  async index(req, res) {
    const categorias = await Categoria.findAll();
    res.render('categoria', { title: 'Express', css: 'crud', categoria })
    console.log(categorias)


  },

  async deletar(req, res) {
    const  id = req.params.id;
    await Categoria.destroy({
      where: {
        id
      }
    })

    res.redirect('/admin/categoria');
  }
}