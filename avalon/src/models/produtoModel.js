const path = require('path');
const fs = require('fs');


const nomeArquivoProdutos = path.join(__dirname, '../database/produtos.json');
// const { validationResult } = require('express-validator');

module.exports = {
  index() {
    return JSON.parse(fs.readFileSync(nomeArquivoProdutos))
  },

  armazenar(produtos) {
    fs.writeFileSync(nomeArquivoProdutos, JSON.stringify(produtos));
  },

  // ----------FUNÇÃO SIMPLIFICADA----------
  criar: function (produto) {

    const produtos = this.index();


    const lastID = produtos[produtos.length - 1]?.id

    if (lastID) {
      produto.id = lastID + 1
    } 
    else {produto.id = 1}

    produtos.push(produto);
    this.armazenar(produtos)

  },


  // criar({
  //   nome,
  //   valor,
  //   categoria,
  //   autor,
  //   editora,
  //   idioma,
  //   paginas,
  //   publicacao,
  //   dimensoes,
  //   acabamento,
  //   isbnUm,
  //   isbnDois,
  //   sinopse,
  //   imagemCapa,
  //   imagensMiniaturas }) {

  //   const produtos = this.index();

  //   produtos.push({
  //     id: produtos[produtos.length - 1].id + 1,
  //     nome,
  //     valor,
  //     categoria,
  //     autor,
  //     editora,
  //     idioma,
  //     paginas,
  //     publicacao,
  //     dimensoes,
  //     acabamento,
  //     isbnUm,
  //     isbnDois,
  //     sinopse,
  //     imagemCapa,
  //     imagensMiniaturas
  //   });

  //   this.armazenar(produtos);

  // },

  buscar: function (req, res) {
    let found = this.index().filter(produto => produto.id == req.query.buscar)
    return found
  },

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

  deletar(id) {
    if (!id) return

    const produtos = this.index();
    const novosProdutos = produtos.filter(produto => produto.id != id);
    // O passo abaixo remove imagens submetidas através do multer.
    // fs.unlinkSync(path.join(__dirname, '../../public/' + servico.filename)).
    this.armazenar(novosProdutos);
  }
}

