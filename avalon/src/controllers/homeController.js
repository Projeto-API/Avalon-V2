const homeModel = require('../models/homeModel')

module.exports = {
    listahome: (req, res) => {
        const home = homeModel.index();
        //res.render('VIEW', {Objeto})
        return res.render('home', {listahome: home, title: "Pagina Home"})
    }
}