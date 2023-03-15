const axios = require('axios');
const cepApi = require('../cepApi');

module.exports = {
    async buscarEnderecoPorCep (cep) {
        const  {data} = await axios ({
            ...cepApi,
            method: 'get',
            url: `/cep/v1/${cep}`
        });
        console.log(data)
        return data
    }
}