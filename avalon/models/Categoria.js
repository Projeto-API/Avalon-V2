const criarCategoriaModel = (sequelize, dataTypes) => {
    const colunas = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  
      tipo: {
        type: dataTypes.STRING,
        allowNull: false
      }
    };
  
    const opcoes = {
      tableName: 'categorias',
      timestamps: false
    };
  
    const Categoria = sequelize.define('Categoria', colunas, opcoes);
  
    return Categoria;
  };
  
  module.exports = criarCategoriaModel;