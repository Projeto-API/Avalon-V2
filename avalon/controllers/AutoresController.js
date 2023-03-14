const { Op } = require('sequelize');
const { Autor, Livro } = require('../models');
Op

module.exports = {
  index: async (req, res) => {
    const autores = await Autor.findAll({
      order: [
        ['nome', 'asc']
      ]

      // include: [
      //   {model: Livro, as: 'livros'}
      // ]
    });
    res.render('autores', { autores });
  },

  search: async (req, res) => {
    const { search } = req.query;
    const autores = await Autor.findAll({
      where: search ? {
        [Op.or]: [
          { nome: { [Op.like]: '%' + search + '%' } },
          { id: search }
        ]
      } : null
    });

    res.render('autores', { autores });
  },

  form: async (req, res) => {
    let autor;
    const { id } = req.params;

    if (id) autor = await Autor.findByPk(id);

    res.render('adicionarAutor', { autor });
  },

  async buscarAutor(req, res) {
    const { id } = req.params
    const autor = await Autor.findByPk(id);

    res.render('adicionarAutor', { autor });

  },

  criar: async (req, res) => {
    try{
    const { nome, biografia, foto } = req.body;
    await Autor.create({ nome, biografia, foto });
  } catch (erro){
    let alert = require('alert'); 
    alert("Erro interno do servidor!")
 
    res.redirect('/admin/autores');
  }
  },

  editar: async (req, res) => {
    const { id } = req.params;
    const { nome, cnpj } = req.body;

    await Autor.update({ nome, cnpj }, {
      where: { id }
    });

    res.redirect('/admin/autores');
  },

  async deletar (req, res) {
    const { id } = req.params

    try {

      await Autor.destroy({
        where: {id}
      })
    } catch (error) {
      console.log("erro ao deletar autor", error)
    }
    console.log("O autor de id " + req.body.id + " foi deletado com sucesso");
    return res.redirect('/admin/autores');
  }
}
