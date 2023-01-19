const path = require('path');
const fs = require('fs');

const produtos = require('../database/produtos.json');
const nomeArquivoProdutos = path.join(__dirname, '../database/produtos.json');
// const { validationResult } = require('express-validator');

module.exports = {
  index() {
    return produtos
  },

  armazenar(produtos) {
    fs.writeFileSync(nomeArquivoProdutos, JSON.stringify(produtos));
  },

  // criar ({ nome, valor, descricao }) {

  criar({
    nome,
    valor,
    categoria,
    autor,
    editora,
    idioma,
    paginas,
    publicacao,
    dimensoes,
    acabamento,
    isbnUm,
    isbnDois,
    sinopse,
    imagemCapa,
    imagensMiniaturas }) {

    produtos.push({
      id: produtos[produtos.length - 1].id + 1, 
      nome,
      valor,
      categoria,
      autor,
      editora,
      idioma,
      paginas,
      publicacao,
      dimensoes,
      acabamento,
      isbnUm,
      isbnDois,
      sinopse,
      imagemCapa,
      imagensMiniaturas
    });
    this.armazenar(produtos);
    // let { errors } = validationResult(req);

    // if (errors.length) {
    //   const errosFormatados = {};
    //   errors.forEach(erro => errosFormatados[erro.param] = erro.msg);

    //   return res.render('cadastro-edicao', { errors: errosFormatados, produto: null });
    // }

    // produtoModel.criar(req.body);
    // return res.redirect('/produto/admin');
  },
  


 
  // deletar (id) {
  //   if (!id) return

  //   const produtos = this.index();
  //   const novosProdutos = produtos.filter(produto => produto.id != id);
  //   // O passo abaixo remove imagens submetidas através do multer.
  //   // fs.unlinkSync(path.join(__dirname, '../../public/' + servico.filename)).
  //   this.armazenar(novosProdutos);
  // }


editar: (req, res) => {
const { id } = req.params;
// let { errors } = validationResult(req);

//   if (errors.length) {
//     const errosFormatados = {};
//     errors.forEach(erro => errosFormatados[erro.param] = erro.msg);

//       errors: errosFormatados,
//       servico: { id, ...req.body }
//     });
//   }

produtoModel.editar(id, req.body);
return res.redirect('/produto/admin');
},

deletar (id) {
  if (!id) return

  const produtos = this.index();
  const novosProdutos = produtos.filter(produto => produto.id != id);
  // O passo abaixo remove imagens submetidas através do multer.
  // fs.unlinkSync(path.join(__dirname, '../../public/' + servico.filename)).
  this.armazenar(novosProdutos);
}
}

