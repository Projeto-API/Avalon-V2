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

  criar ({ nome, valor, descricao }) {
    if (!nome || !valor || !descricao) return

    produtos.push({ id: uuid(), nome, valor, descricao });
    this.armazenar(produtos);
  },

  buscar (id) {
    return produtos.find(produto => produto.id == id);
  },

  atualizar (id, { nome, valor, descricao }) {
    if (!id) return

    if (!nome || !valor || !descricao) return

    const produto = this.buscar(id);

    produto.nome = nome;
    produto.valor = valor;
    produto.descricao = descricao;

    this.armazenar(produtos);
  },

  excluir (id) {
    if (!id) return

   produtos = produtos.filter(produto => produto.id != id);
   this.armazenar(produtos);
  }
}