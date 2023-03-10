const criarSinopseModel = (sequelize, dataTypes) => {
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
    }
  };

  const opcoes = {
    tableName: 'sinopse',
    timestamps: false
  };

  const Sinopse = sequelize.define('Sinopse', colunas, opcoes);

  return Sinopse;
};

module.exports = criarSinopseModel;