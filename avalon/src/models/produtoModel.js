const path = require('path');
const fs = require('fs');

const produtos = require('../database/produtos.json');
const nomeArquivoprodutos = path.join(__dirname, '../database/produtos.json');

module.exports = {
  index () {
    return produtos
  },

  armazenar (produtos) {
    fs.writeFileSync(nomeArquivoprodutos, JSON.stringify(produtos));
  },

  // criar ({ nome, valor, descricao }) {

  criar (req) {


    let novoLivro = {
      id: produtos[produtos.length -1].id + 1,
      nome: req.body.nome,
      valor: req.body.valor
     
    }

    // enviando para o produtos JSON
    produtos.push(novoLivro);
    this.armazenar(produtos);

    console.log(produtos);
  },

  buscar (id) {
    return produtos.find(produto => produto.id == id);
  },


  atualizar (id, { nome, valor, descricao }) {
    // validacoes para parar a execução
    if (!id) return

    if (!nome || !valor || !descricao) return

// criacao de variavel auxiliar
    const produto = this.buscar(id);
//apos localizar o id, sobrescreve o valor dos campos.
    produto.nome = nome;
    produto.valor = valor;
    produto.descricao = descricao;


    this.armazenar(produtos);
  },

  deletar (id) {
    //se o id não é passado, para a execução
    if (!id) return

   produtos = produtos.filter(produto => produto.id != id);
   this.armazenar(produtos);
  }
}