const { Editora } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  async index(req, res) {

    const editoras = await Editora.findAll();

    res.render('editoras', { editoras })
  },

  search: async (req, res) => {
    const { search } = req.query;
    const editoras = await Editora.findAll({
      where: search ? {
        [Op.or]: [
          { nome: { [Op.like]: '%' + search + '%' } },
          { id: search }
        ]
      } : null
    });

    res.render('editoras', { editoras })
  },

  form: async (req, res) => {
    let editora;
    const { id } = req.params;

    if (id) editora = await Editora.findByPk(id);

    res.render('adicionarEditora', { editora });
  },

  async buscarEditora(req, res) {
    const { id } = req.params

    const editora = await Editora.findByPk(id)
    res.render('adicionarEditora', { editora });

  },

  criar: async (req, res) => {
    try{
    const { nome, cnpj } = req.body;
    await Editora.create({ nome, cnpj });
  } catch (erro){
    let alert = require('alert'); 
    alert("Erro interno do servidor!")
    res.redirect('/admin/editoras');
  }
},

  editar: async (req, res) => {
    try{
    const { id } = req.params;
    const { nome, cnpj } = req.body;

    await Editora.update({ nome, cnpj }, {
      where: { id }
    });
  } catch (erro){
    res.redirect('/admin/editoras');
  }
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
