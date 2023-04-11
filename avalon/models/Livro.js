const criarLivroModel = (sequelize, dataTypes) => {
  const colunas = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    titulo: {
      type: dataTypes.STRING,
      allowNull: false,
    },

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

    ano: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },

    ano: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },

    ano: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },

    paginas: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },

    autores_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },

    editoras_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },

    categorias_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },

    capa: {
      type: dataTypes.STRING,
      allowNull: false
    },

    imagens: {
      type: dataTypes.STRING,
      allowNull: true
    },

    capa: {
      type: dataTypes.STRING,
      allowNull: false
    },

    imagens: {
      type: dataTypes.STRING,
      allowNull: true
    },
  };

  const opcoes = {
    tableName: 'livros',
    timestamps: false
  };

  const Livro = sequelize.define('Livro', colunas, opcoes);

  Livro.associate = (models) => {
    Livro.belongsTo(models.Editora, {
      // editora.livros -> array de livros
      // editora.livros -> array de livros
      as: 'editora', // livro.editora.nome -> nome da editora de um livro
      foreignKey: 'editoras_id'
    }),

      Livro.belongsTo(models.Categoria, {
        // editora.livros -> array de livros
        as: 'categoria', // livro.autores.nome -> nome da editora de um livro
        foreignKey: 'categorias_id'
      }),

      Livro.belongsTo(models.Autor, {
        // editora.livros -> array de livros
        as: 'autor', // livro.autores.nome -> nome da editora de um livro
        foreignKey: 'autores_id'
      }),
      
      Livro.hasMany(models.ImagensLivro, {
        // editora.livros -> array de livros
        as: 'imagens_livro', // livro.autores.nome -> nome da editora de um livro
        foreignKey: 'livros_id'
      });
  }


  return Livro;
}
module.exports = criarLivroModel;