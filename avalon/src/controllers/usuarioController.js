const usuarioModel = require('../models/usuarioModel')

module.exports = {
    listausuario: (req, res) => {
        const usuario = usuarioModel.users();
       
        res.render('usuario', { title: 'Express', css: 'usuario', usuario });
    }
}