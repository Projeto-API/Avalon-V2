const detalhesModel = require('../models/detalhesModel')

module.exports = {
    listadetalhes: (req, res) => {
        const detalhes = detalhesModel.index();
       
        res.render('detalhes', { title: 'Express', css: 'detalhes', detalhes });
    }
}