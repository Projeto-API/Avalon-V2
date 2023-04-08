const { buscarEnderecoPorCep } = require("../services/request/endereco");
const { Carrinho } = require('../models');

const valoresFretePorRegião = {
    'SP': 'Grátis',
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

            console.log(endereco)
            return res.status(200).json(endereco)
        } catch (erro) {

            console.log(erro)

        }
    },

    calcularfrete: async (req, res) => {
        try {

            let livros = await Carrinho.findAll();
            const { cep } = req.query;
            const { state } = await buscarEnderecoPorCep(cep);
            const regiaoConhecida = state in valoresFretePorRegião;
            const valorFrete = valoresFretePorRegião[regiaoConhecida ? state : 'Outros']
           
            console.log(valorFrete, state )
            res.render('carrinho', { livros, valorFrete })

        } catch (error) {
            console.log(error)
        }
    }
}