const { Editora } = require('../models');
<<<<<<< HEAD
const {Op} = require('sequelize');

module.exports = {
  index: async (req, res) => {
    const { search } = req.query;
    const editoras = await Editora.findAll({
      where: search ? { nome: {[Op.like]: '%' + search + '%'} } : null 
=======
const { Op } = require('sequelize');

module.exports = {
  async index(req, res) {

    const editoras = await Editora.findAll();

    res.render('editoras', { editoras })
  },

  search: async (req, res) => {
    const { search } = req.query;
    const editoras = await Editora.findAll({
      where: search ? { nome: { [Op.like]: '%' + search + '%' } } : null
>>>>>>> igorcr
    });

    res.render('editoras', { editoras });
  },

  form: async (req, res) => {
    let editora;
    const { id } = req.params;

    if (id) editora = await Editora.findByPk(id);

    res.render('adicionarEditora', { editora });
  },

<<<<<<< HEAD
  criar: async (req, res) => {
    const { nome } = req.body;
    await Editora.create({ nome });

    res.redirect('/editoras');
=======
  async buscarEditora(req, res) {
    const { id } = req.params

    const editora = await Editora.findByPk(id)
    res.render('adicionarEditora', { editora });

  },

  criar: async (req, res) => {
    const { nome, cnpj } = req.body;
    await Editora.create({ nome, cnpj });

    res.redirect('/admin/editoras');
>>>>>>> igorcr
  },

  editar: async (req, res) => {
    const { id } = req.params;
<<<<<<< HEAD
    const { nome } = req.body;

    await Editora.update({ nome }, {
      where: { id }
    });

    res.redirect('/editoras');
  },

  remover: async (req, res) => {
    const { id } = req.params;

    await Editora.destroy({
      where: { id },
    });

    res.redirect('/editoras');
  },
};
=======
    const { nome, cnpj } = req.body;

    await Editora.update({ nome, cnpj }, {
      where: { id }
    });

    res.redirect('/admin/editoras');
  },

  async deletar (req, res) {
    const { id } = req.params

    try {

      await Editora.destroy({
        where: {id}
      })
    } catch (error) {
      console.log("erro ao deletar editora", error)
    }
    console.log("A editora de id " + req.body.id + " foi deletada com sucesso");
    return res.redirect('/admin/editoras');
  }
}
>>>>>>> igorcr
