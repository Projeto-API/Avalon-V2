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
    livros_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
  };

  const opcoes = {
    tableName: 'imagem_produto',
    timestamps: false
  };

  const ImagemLivro = sequelize.define('ImagensLivro', colunas, opcoes);
  

  return ImagemLivro;
}
module.exports = criarImagemLivroModel;