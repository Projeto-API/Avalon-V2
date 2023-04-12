const criarLancamentosModel = (sequelize, dataTypes) => {
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
    tableName: 'lancamentos',
    timestamps: false
  };

  const Lancamentos = sequelize.define('Lancamentos', colunas, opcoes);

  return Lancamentos;
};

module.exports = criarLancamentosModel;
  