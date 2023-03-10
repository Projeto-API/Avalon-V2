const { Categoria } = require('../models');

module.exports = {
  index: async (req, res) => {
    const categorias = await Categoria.findAll({
      order: [
        ['tipo', 'asc']
      ]
    });
    res.render('categorias', { categorias });
  },

  search: async (req, res) => {
    const { search } = req.query;
    const categorias = await Categoria.findAll({
      where: search ? { nome: { [Op.like]: '%' + search + '%' } } : null
    });

    res.render('categorias', { categorias });
  },

  form: async (req, res) => {
    let categoria;
    const { id } = req.params;

    if (id) categoria = await Categoria.findByPk(id);

    res.render('adicionarCategoria', { categoria });
  },

  async buscarCategoria(req, res) {
    const { id } = req.params

    const categoria = await Categoria.findByPk(id)
    res.render('adicionarCategoria', { categoria });

  },

  criar: async (req, res) => {
    const { tipo } = req.body;
    await Categoria.create({ tipo });

    res.redirect('/admin/categorias');
  },

  editar: async (req, res) => {
    const { id } = req.params;
    const { tipo } = req.body;

    await Categoria.update({ tipo }, {
      where: { id }
    });

    res.redirect('/admin/categorias');
  },

  async deletar (req, res) {
    const { id } = req.params

    try {

      await Categoria.destroy({
        where: {id}
      })
    } catch (error) {
      console.log("erro ao deletar categoria", error)
    }
    console.log("A categoria de id " + req.body.id + " foi deletada com sucesso");
    return res.redirect('/admin/categorias');
  }
}