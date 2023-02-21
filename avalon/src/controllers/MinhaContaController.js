const MinhaContaModel = require('../models/MinhaContaModel')

module.exports = {
    listaMinhaConta: (req, res) => {
        const MinhaConta = MinhaContaModel.users();
       
        res.render('MinhaConta', { title: 'Express', css: 'MinhaConta', MinhaConta });
    },

    criarForm: (req, res) => {
        return res.render('cadastro-MinhaConta', {erros: [], user: null})
      },
      criar: (req, res) => {
        const MinhaConta = req.body;
        const erros = [];
    
        if (!MinhaConta.email || !MinhaConta.senha) {
          erros.push({ msg: 'Login inválido!' });
          return res.render('cadastro-MinhaConta', {erros, user: null});
        }
    
        MinhaContaModel.criar(MinhaConta);
        return res.redirect('/login');
      }



}
