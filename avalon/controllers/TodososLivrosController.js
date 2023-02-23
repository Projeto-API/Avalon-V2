const TodososLivrosModel = require('../models/TodososLivrosModel')

module.exports = {
    listaTodososLivros: (req, res) => {
        const TodososLivros = TodososLivrosModel.index();
       
        res.render('TodososLivros', { title: 'Express', css: 'TodososLivros', TodososLivros });
    }
}