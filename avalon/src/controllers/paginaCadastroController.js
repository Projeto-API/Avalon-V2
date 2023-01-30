const paginaCadastroModel = require('../models/paginaCadastroModel')

module.exports = {
    listapaginaCadastro: (req, res) => {
        const paginaCadastro = paginaCadastroModel.users();
       
        res.render('paginaCadastro', { title: 'Express', css: 'paginaCadastro', paginaCadastro });
    }
}




