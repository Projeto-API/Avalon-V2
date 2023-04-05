const criarImagemLivroModel = (sequelize, dataTypes) => {
  const colunas = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    imagens: {
      type: dataTypes.STRING,
      allowNull: true
    },
  };

  const opcoes = {
    tableName: 'imagem_produto',
    timestamps: false
  };

  const ImagemLivro = sequelize.define('ImagensLivro', colunas, opcoes);

  ImagemLivro.associate = (models) => {
    ImagemLivro.belongsTo(models.Livro, {
      // editora.livros -> array de livros
      // editora.livros -> array de livros
      as: 'livros', // livro.editora.nome -> nome da editora de um livro
      foreignKey: 'livros_id'
    }),


      ImagemLivro.belongsTo(models.Editora, {
        // editora.livros -> array de livros
        // editora.livros -> array de livros
        as: 'editora', // livro.editora.nome -> nome da editora de um livro
        foreignKey: 'livros_editoras_id'
      }),

      ImagemLivro.belongsTo(models.Categoria, {
        // editora.livros -> array de livros
        as: 'categoria', // livro.autores.nome -> nome da editora de um livro
        foreignKey: 'livros_categorias_id'
      });
  }

  return ImagemLivro;
}
module.exports = criarImagemLivroModel;