const criarLivroModel = (sequelize, dataTypes) => {
  const colunas = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

<<<<<<< HEAD
    nome: {
=======
    titulo: {
>>>>>>> igorcr
      type: dataTypes.STRING,
      allowNull: false,
    },

<<<<<<< HEAD
=======
    preco: {
      type: dataTypes.DECIMAL,
      allowNull: false,
    },

    acabamento: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    sinopse: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    isbn: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    idioma: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    paginas: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },

>>>>>>> igorcr
    autores_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },

    editoras_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
<<<<<<< HEAD
=======

    categorias_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
>>>>>>> igorcr
  };

  const opcoes = {
    tableName: 'livros',
    timestamps: false
  };

  const Livro = sequelize.define('Livro', colunas, opcoes);

  Livro.associate = (models) => {
    Livro.belongsTo(models.Editora, {
                     // editora.livros -> array de livros
      as: 'editora', // livro.editora.nome -> nome da editora de um livro
      foreignKey: 'editoras_id'
    });
  };

<<<<<<< HEAD
=======
  Livro.associate = (models) => {
    Livro.belongsTo(models.Categoria, {
                     // editora.livros -> array de livros
      as: 'categoria', // livro.editora.nome -> nome da editora de um livro
      foreignKey: 'categorias_id'
    });
  };

>>>>>>> igorcr
  return Livro;
};

module.exports = criarLivroModel;