const { buscarEnderecoPorCep } = require("../services/request/endereco");


const valoresFretePorRegião = {
    'SP': 'R$ 0,00',
    'RJ': 'R$ 9,90',
    'MG': 'R$ 14,90',
    'RS': 'R$ 14,90',
    'Outros': 'R$ 20,90'
}

module.exports = {
    obterEnderecoPorCep: async (req, res) => {
        try {
            console.log('Estou aqui')
            const { cep } = req.query;
            const endereco = await buscarEnderecoPorCep(cep);

            return res.status(200).json(endereco)
        } catch (erro) {
            console.log(erro)
        }
    },

    calcularfrete: async (req, res) => {
        try {

            const { cep } = req.query;
            const { state } = await buscarEnderecoPorCep(cep);
            const regiaoConhecida = state in valoresFretePorRegião;
            const valorFrete = valoresFretePorRegião[regiaoConhecida ? state : 'Outros']
            req.session.frete = valorFrete

            console.log(valorFrete, state)
            res.render('carrinho', { valorFrete, userId: req.session.userId, userName: req.session.userName, frete: req.session.frete  })

        } catch (error) {
            console.log(error)
        }
    }
}
