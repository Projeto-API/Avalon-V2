const path = require('path');
const fs = require('fs');


const nomeArquivoProdutos = path.join(__dirname, '../database/produtos.json');
const { validationResult } = require('express-validator');

module.exports = {
  index() {
    return JSON.parse(fs.readFileSync(nomeArquivoProdutos))
  },

  armazenar(produtos) {
    fs.writeFileSync(nomeArquivoProdutos, JSON.stringify(produtos));
  },


  criar: function (produto) {

    const produtos = this.index();


    const lastID = produtos[produtos.length - 1]?.id

    if (lastID) {
      produto.id = lastID + 1
    }
    else { produto.id = 1 }

    produtos.push(produto);
    this.armazenar(produtos)

  },

  buscar: function (req, res) {
    let found = this.index().filter(produto => produto.id == req.query.buscar)
    return found
  },


  buscarId: function (req) {
    console.log("req", req.params.id)
    let found = this.index().filter(produto => produto.id == req.params.id)
    console.log(">>>>", found)
    return found
  },

  editar: function (req, nome) {
    if (!id) return

    const produtos = this.index();
    const novoProduto = produtos.filter(produto => produto.id == id);

    novoProduto.nome = req.body.nome
    novoProduto.valor = req.body.valor
    novoProduto.categoria = req.body.categoria
    novoProduto.autor = req.body.autor
    novoProduto.editora = req.body.editora
    novoProduto.sinopse = req.body.sinopse
    novoProduto.capaImg = req.body.capaImg

    this.armazenar(produtos)

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

