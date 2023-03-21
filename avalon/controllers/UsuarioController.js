

const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
 


  criar: function (usuario) {
    const usuarios = this.listar();

    usuario.senha = bcrypt.hashSync(usuario.senha, 10);

    usuarios.push(usuario);
    this.gravar(usuarios);
  },

index: async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      order: [
        ['nome', 'asc']
      ]

    });
    res.render('usuarios', { usuarios });

  } catch (erro) {
    let alert = require('alert');
    alert("Usuario não encontrado!")
  }
},

search: async (req, res) => {
  try {
    const { search } = req.query;
    const usuarios = await Usuario.findAll({
      where: search ? {
        [Op.or]: [
          { nome: { [Op.like]: '%' + search + '%' } },
          { id: search }
        ]
      } : null
    });

    res.render('usuarios', { usuarios });

  } catch (erro) {
    let alert = require('alert');
    alert("ERRO 500 - Erro interno do servidor!")
  }
},

form: async (req, res) => {
  try {
    let usuario;
    const { id } = req.params;

    if (id) usuario = await Usuario.findByPk(id);

    res.render('cadastroUsuario', { usuario });

  } catch (erro) {
    let alert = require('alert');
    alert("ERRO 500 - Erro interno do servidor!")
  }
},

buscarUsuario: async (req, res) => {
  try {
    const { id } = req.params
    const usuario = await Usuario.findByPk(id);
    console.log(autor)
    res.render('minhaconta', { usuario });

  } catch (erro) {
    let alert = require('alert');
    alert("ERRO 500 - Erro interno do servidor!")
  }

},

editar: async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, sobrenome, doc_identificacao, email, password,cep, endereco, data_nascimento, foto  } = req.body;


    await Usuario.update({ nome, sobrenome, doc_identificacao, email, password,cep, endereco, data_nascimento, foto}, {
      where: { id }
    });

    res.redirect('/admin');

  } catch (erro) {
    let
    alert = require('alert');
    alert("ERRO 500 - Erro interno do servidor!")
  }
},

deletar: async (req, res) => {
  try {
    const { id } = req.params
    await Usuario.destroy({
      where: { id }
    })

    return res.redirect('/admin');

  } catch (error) {
    let alert = require('alert');
    alert("ERRO 500 - Erro interno do servidor!")
  }

}
}
