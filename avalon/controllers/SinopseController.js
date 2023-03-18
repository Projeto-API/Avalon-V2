<<<<<<< HEAD
const SinopseModel = require('../models/SinopseModel')

module.exports = {
    listaSinopse: (req, res) => {
        const Sinopse = SinopseModel.index();
       
        res.render('Sinopse', { title: 'Express', css: 'Sinopse', Sinopse });
    }
=======
const { Sinopse } = require('../models');

module.exports = {
  index: async (req, res) => {
    const sinopse = await Sinopse.findAll({
      order: [
        ['nome', 'desc']
      ]
    });
    res.render('sinopse', { sinopse });
  }
>>>>>>> igorcr
}