const path = require('path');
const fs = require('fs');


const nomeArquivoLivros = path.join(__dirname, '../database/Livros.json');
const { validationResult } = require('express-validator');

module.exports = {
  index() {
    return JSON.parse(fs.readFileSync(nomeArquivoLivros))
  },

  armazenar(Livros) {
    fs.writeFileSync(nomeArquivoLivros, JSON.stringify(Livros));
  },


  criar: function (Livro) {

    const Livros = this.index();


    const lastID = Livros[Livros.length - 1]?.id

    if (lastID) {
      Livro.id = lastID + 1
    }
    else { Livro.id = 1 }

    Livros.push(Livro);
    this.armazenar(Livros)

  },

  buscar: function (req, res) {
    let found = this.index().filter(Livro => Livro.id == req.query.buscar)
    return found
  },


  buscarId: function (req, res) {
    console.log("req", req.params.id)
    let found = this.index().filter(Livro => Livro.id == req.params.id)
    console.log(">>>>", found)
    return found
  },

  editar: function (req, id) {
    if (!id) return

    const Livros = this.index();
    const novoLivro = Livros.filter(Livro => Livro.id == id);

    novoLivro.nome = req.body.nome
    novoLivro.valor = req.body.valor
    novoLivro.categoria = req.body.categoria
    novoLivro.autor = req.body.autor
    novoLivro.editora = req.body.editora
    novoLivro.sinopse = req.body.sinopse
    novoLivro.capaImg = req.body.capaImg

    this.armazenar(Livros)

  },

  deletar(id) {
    if (!id) return

    const Livros = this.index();
    const novosLivros = Livros.filter(Livro => Livro.id != id);
    // O passo abaixo remove imagens submetidas através do multer.
    // fs.unlinkSync(path.join(__dirname, '../../public/' + servico.filename)).
    this.armazenar(novosLivros);
  }
}

