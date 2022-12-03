const homeModel = require('../models/homeModel')

module.exports = {
    listaServicos: (req, res) => {
        const home = homeModel.index();
        //res.render('VIEW', {Objeto})
        return res.render('servicos', {listaServicos: servicos, title: "Lista de Serviços"})
    }
}