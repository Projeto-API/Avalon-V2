const criarClienteModel = (sequelize, dataTypes) => {
  const colunas = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    nome: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    sobrenome: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    doc_identificacao: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    data_nascimento: {
      type: dataTypes.DATE,
      allowNull: false,
    },

    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    senha: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    cep: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },

    endereco: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },

    foto: {
      type: dataTypes.INTEGER,
      allowNull: true,
    }
  };

  const opcoes = {
    tableName: 'clientes',
    timestamps: false
  };

  const Cliente = sequelize.define('Cliente', colunas, opcoes);

  return Cliente;
};

module.exports = criarClienteModel;