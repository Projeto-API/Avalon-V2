const { Livro, Editora, Autor, Categoria } = require('../models');

module.exports = {
    listahome: (req, res) => {
        const home = homeModel.index();
       
        res.render('home', { title: 'Express', css: 'home',home });
    }
  },

}



