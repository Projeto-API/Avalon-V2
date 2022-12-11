module.exports = {
    mostraCarrinho: (req, res) => {
        res.render('carrinho', {js: "/js/carrinho.js"})
    }
}










// const ServiceLivrosModel = require('../models/ServiceLivrosModel');

// module.exports = { 
//     index: (req, res) => {
//         //controler comunicando com o model
//         const servicos = ServiceLivroModel.index();
//         //controler comunicando com a view
//         return res.render('carrinho', { servicos })
//     }
// }
