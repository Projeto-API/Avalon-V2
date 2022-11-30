const detalhesModel = require('../models/detalhesModel');

module.exports = {
    index: (req, res)=> {
        const detalhes = detalhesModel.index();
        return res.render('detalhes', detalhes)
    }
}