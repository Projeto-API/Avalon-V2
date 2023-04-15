const { Usuario, Livro, Editora, Autor, Categoria } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
 
    index: async (req, res) => {
      res.render('login');
    },
  
    forgotPassword: async (req, res) => {
      res.render('forgot-password');
    },

  login: async (req, res) => {

    // ----------------------------------------LOGIN : AUTENTICAÇÃO DE USUARIO-------------------------------------------//
    try {
      const { id } = req.params
      const { email, password } = req.body;
    
      const passwordcripto = await bcrypt.hash(password, 10);
     
      const user = await Usuario.findOne({ where: { email } })
  
      const validadorsenha = await bcrypt.compare(password, user.password)
    
      if (validadorsenha) {
        req.session.email = user.email;
        req.session.password = passwordcripto;
        req.session.tipo = user.tipo;
        const livros = await Livro.findAll({
          include: [
            { model: Editora, as: 'editora' },
            { model: Autor, as: 'autor' },
            { model: Categoria, as: 'categoria' }
          ]})
      const livrosLancamento = await Livro.findAll({
        limit: 8, 
        order: [['id','DESC']]
      });
      const editoras = await Editora.findAll();
      const autores = await Autor.findAll();
      const categorias = await Categoria.findAll();
      const usuario = await Usuario.findByPk(id);

      
// ----------------------------------------LOGIN: VERIFICAÇÃO DE TIPO DE USUARIO -------------------------------------------//
      if (user.tipo === 1) { // Se o tipo do usuário for 1 (administrador)
        res.render('admin', { livros, livrosLancamento, editoras, categorias, autores }); // Redireciona para a página de administração
      } else if (user.tipo === 0) { // Se o tipo do usuário for 0 (usuário comum)

        console.log(usuario)
          res.redirect('/'); // Redireciona para a página minha-conta
      }
      } else {
        console.log("Vai redirecionar para login")
        let alert = require('alert');
        alert("Senha Inválida")
        res.redirect('login')
      }
   
      
    } catch (erro) {
      console.log(erro)
    }
  }
}