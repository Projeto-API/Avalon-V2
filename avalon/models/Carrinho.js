const criarCarrinhoModel = (sequelize, DataType) => {
    const colunas = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataType.STRING,
            allowNull: false
        },
        preco: {
            type:DataType.DECIMAL,
            allowNull: false
        },
        quantidade: {
            type:DataType.INTEGER,
            allowNull: false
        },
        imagem: {
            type:DataType.STRING,
            allowNull: false
        },
        

    };

    const opcoes = {
        tableName: 'carrinho',
        timetamps: false,
        createdAt: false,
        updatedAt: false

    };

    const Carrinho = sequelize.define('Carrinho', colunas, opcoes);
    return Carrinho
}

module.exports = criarCarrinhoModel;