const { Editora } = require('../models')

module.exports = {
  async index(req, res) {
    const editoras = await Editora.findAll();
    res.render('crudEditora', { title: 'Express', css: 'crud', editoras })
  },

  async deletar(req, res) {
    const { id } = req.params;

    await Editora.destroy({
      where: { id },
    });

    res.redirect('/admin/editoras');
  }


}