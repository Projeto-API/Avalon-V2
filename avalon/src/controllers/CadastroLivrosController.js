const CadastroLivrosModel = require('../../models/CadastroLivrosModel')

module.exports = {
    listaCadastroLivros: (req, res) => {
        const CadastroLivros = CadastroLivrosModel.index();
       
        res.render('CadastroLivros', { title: 'Express', css: 'CadastroLivros', CadastroLivros });
    }
}