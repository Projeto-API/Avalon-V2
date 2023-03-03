const criarProdutoModel = (sequelize, dataTypes) => {
   const colunas = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    titulo: {
        type: dataTypes.STRING,
        allowNull: false
    },

    preco: {
        type: dataTypes.DECIMAL,
        allowNull:false
    },

    acabamento: {
        type: dataTypes.STRING,
        allowNull:false
    },

    sinopse: {
        type: dataTypes.STRING,
        allowNull:true
    },

    isbn: {
        type: dataTypes.STRING,
        allowNull:false
    },

    idioma: {
        type: dataTypes.STRING,
        allowNull:false
    },

    paginas: {
        type: dataTypes.INTEGER,
        allowNull:false
    },

    
   };

   const opcoes = {
    tableName: 'produtos',
    timestamps: false
   };
   
    const Produto = sequelize.define('Produto',colunas, opcoes)

    return Produto
};

    module.exports = criarProdutoModel;
