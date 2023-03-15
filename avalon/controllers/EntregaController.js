const { buscarEnderecoPorCep } = require("../services/request/endereco");

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
            const { cep } = req.query;
            const endereco = await buscarEnderecoPorCep(cep);

            return res.status200.json(endereco)
        } catch (erro) {

            let alert = require('alert');
            alert("ERRO 500 - Erro interno do servidor!")

        }
    },

    calcularfrete: async (req, res) => {
        try {
            const { cep } = req.query;
            const { uf } = await buscarEnderecoPorCep(cep);
            const regiaoConhecida = uf in valoresFretePorRegião;
            const valorFrete = valoresFretePorRegião[regiaoConhecida ? uf : 'Outros']
            return res.status(200).json(valorFrete)
            
        } catch (error) {
            console.log('Região não encontrada')
        }
    }
}