const carrinho = require('../database/carrinho.json')
const path = require('path');
const fs =require ('fs');
const filename = path.join(__dirname,"../database/carrinho.json");

module.exports ={

    save: function (data) {
       return fs.writeFileSync(filename,data )
    },
    add: function (produtoId)  {
        console.log("🚀 ~ file: Carrinho.js:12 ~ produtoId", produtoId)
        carrinho.push(produtoId);
        this.save(JSON.stringify(carrinho,null,4));
    },
    findAll: function () {
        return carrinho
    },
    remove: function(produtoId){
        this.remove(produtoId);
        
    }

}