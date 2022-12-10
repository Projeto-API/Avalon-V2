const carrinhoFlutuanteModel = require('../models/carrinhoFlutuanteModel')

module.exports = {
    listacarrinhoFlutuante: (req, res) => {
        const carrinhoFlutuante = carrinhoFlutuanteModel.index();
       
        res.render('carrinhoFlutuante', { title: 'Express', css: 'carrinhoFlutuante', carrinhoFlutuante });
    }
}