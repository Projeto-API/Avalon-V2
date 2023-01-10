const paginaLoginModel = require('../models/paginaLoginModel')

module.exports = {
    listapaginaLogin: (req, res) => {
        const paginaLogin = paginaLoginModel.index();
       
        res.render('paginaLogin', { title: 'Express', css: 'paginaLogin', paginaLogin });
    }
}