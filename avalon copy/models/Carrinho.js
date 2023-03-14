// const path = require('path');
// const fs =require ('fs');
// const filename = path.join(__dirname,"../database/carrinho.json");

// module.exports ={



//     save: function (data) {
//        return fs.writeFileSync(filename,data )
//     },
//     add: function (produtoId)  {
//         let carrinho =this.findAll();
//         carrinho.push(produtoId);
//         this.save(JSON.stringify(carrinho,null,4));
//     },
//     findAll: function () {
//         return JSON.parse(fs.readFileSync(filename))
//     },
//     remove: function(id){

//         const novoCarrinho = this.findAll().filter(item => item.id != id);

//         this.save(JSON.stringify(novoCarrinho,null,4));
        
//     }

// }



module.exports = (sequelize, DataType) =>{
    const Carrinho = sequelize.define('Carrinho', {
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
            titulo: DataType.STRING,
            preco: DataType.DECIMAL,
            quantidade: DataType.INTEGER,
            imagem: DataType.STRING
    },{
        tableName:'carrinho',
        timetamps:false,
        createdAt:false,
        updatedAt:false
      
    })
    return Carrinho

}