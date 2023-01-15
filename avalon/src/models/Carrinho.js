const carrinho = require('../database/carrinho.json')
const path = require('path');
const fs =require ('fs');
const filename = path.join(__dirname,"../database/carrinho.json");

module.exports ={

    save: (data) =>{
       return fs.writeFileSync(filename,data )
    },
    createOne:(req) => {
        let novoServico = {
            id:servicos [servicos.lenght -1].id +1,
            nome: req.body.nome,
            valor: req.body.valor,
            imagem:req.file.filename
        }
        carrinho.push(novoServico);
        this.save(JSON.stringify(carrinho,null,4));
        
    },

    findAll: () =>{
        return carrinho
    }
}