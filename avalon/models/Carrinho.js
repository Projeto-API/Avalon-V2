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