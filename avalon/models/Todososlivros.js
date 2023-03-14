const criarTodososlivrosModel = (sequelize, dataTypes) => {
  const colunas = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    nome: {
      type: dataTypes.STRING,
      allowNull: false
    },
    imagem:{
      type:dataTypes.STRING
    }
      
  };

  const opcoes = {
    tableName: 'todososlivros',
    timestamps: false
  };

  const Todososlivros = sequelize.define('Todososlivros', colunas, opcoes);

  return Todososlivros;
};

module.exports = criarTodososlivrosModel;