const criarUsuarioModel = (sequelize, dataTypes) => {
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

    sobrenome: {
      type: dataTypes.STRING,
      allowNull: false
    },

    genero: {
      type: dataTypes.STRING,
      allowNull: true
    },

    doc_identificacao: {
      type: dataTypes.STRING,
      allowNull: false
    },

    email: {
      type: dataTypes.STRING,
      allowNull: false
    },

    password: {
      type: dataTypes.STRING,
      allowNull: false
    },

    cep: {
      type: dataTypes.STRING,
      allowNull: false
    },

    endereco: {
      type: dataTypes.STRING,
      allowNull: false
    },

    cidade: {
      type: dataTypes.STRING,
      allowNull: false
    },

    estado: {
      type: dataTypes.STRING,
      allowNull: false
    },

    numero: {
      type: dataTypes.STRING,
      allowNull: false
    },

    complemento: {
      type: dataTypes.STRING,
      allowNull: true
    },

    data_nascimento: {
      type: dataTypes.STRING,
      allowNull: true
    },

    foto: {
      type: dataTypes.STRING,
      allowNull: true
    },

    tipo: {
      type: dataTypes.INTEGER,
      allowNull: false
    }
  };

  const opcoes = {
    tableName: 'usuarios',
    timestamps: false
  };

  const Usuario = sequelize.define('Usuario', colunas, opcoes);

  return Usuario;
};

module.exports = criarUsuarioModel;