const path = require('path');
const fs = require('fs');


const nomeArquivoProdutos = path.join(__dirname, '../database/produtos.json');
const { validationResult } = require('express-validator');

module.exports = {
  index() {
    return JSON.parse(fs.readFileSync(nomeArquivoProdutos))
  },

  armazenar(produtos) {
    fs.writeFileSync(nomeArquivoProdutos, JSON.stringify(produtos,null,4));
  },

<<<<<<< HEAD
  // ----------FUNÇÃO SIMPLIFICADA----------
  criar: function (produto) {

    const produtos = this.index();


    const lastID = produtos[produtos.length - 1]?.id

    if (lastID) {
      produto.id = lastID + 1
    } 
    else {produto.id = 1}
=======

  criar: function (produto) {

    const produtos = this.index();


    const lastID = produtos[produtos.length - 1]?.id

    if (lastID) {
      produto.id = lastID + 1
    }
    else { produto.id = 1 }
>>>>>>> igor

    produtos.push(produto);
    this.armazenar(produtos)

  },
<<<<<<< HEAD


  buscar: function (req, res) {
    console.log("req", req.query)
    let found = this.index().filter(produto => produto.id == req.query.buscar)
    return found
  },
  buscarId: function (req, res) {
    console.log("req", req.params.id)
    let found = this.index().filter(produto => produto.id == req.params.id)
    console.log(">>>>", found)
    return found
  },

  editar: (req) => {
    produtos.forEach(produto => {
      if (produto.id != req.body.id) return
      produto.nome = req.body.nome
      produto.descricao = req.body.descricao
      produto.valor = req.body.valor
      produto.imagem = req.body.imagem
    })
    fs.writeFileSync(path.join(__dirname, "../database/produtos.json"), JSON.stringify(produto, null, 4))
    // letproduto{ errors } = validationResult(req);

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

=======

  buscar: function (req, res) {
    let found = this.index().filter(produto => produto.id == req.query.buscar)
    return found
  },


  editar: (req) => {
    produtos.forEach(produto => {
      if (produto.id != req.body.id) return
      produto.nome = req.body.nome
      produto.descricao = req.body.descricao
      produto.valor = req.body.valor
      produto.imagem = req.body.imagem
    })
    fs.writeFileSync(path.join(__dirname, "../database/produtos.json"), JSON.stringify(produto, null, 4))
    // letproduto{ errors } = validationResult(req);

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

>>>>>>> igor
    const produtos = this.index();
    const novosProdutos = produtos.filter(produto => produto.id != id);
    // O passo abaixo remove imagens submetidas através do multer.
    // fs.unlinkSync(path.join(__dirname, '../../public/' + servico.filename)).
    this.armazenar(novosProdutos);
  }
}
<<<<<<< HEAD
=======

>>>>>>> igor
