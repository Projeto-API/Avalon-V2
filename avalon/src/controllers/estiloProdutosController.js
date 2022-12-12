const estiloProdutosModel = require('../models/ServicoModel')

module.exports = {
    listaestiloProdutos: (req, res) => {
        const estiloProdutos = estiloProdutosModel.index();
       
        res.render('estiloProdutos', { title: 'Express', css: 'estiloProdutos', estiloProdutos, javascripts: "/javascripts/adicionarCarrinho.js" });
    },
    mostraAdminServicos: (req, res) => {
        res.render("admin")
    },
    criaServico: (req, res) => {
        if (!req.file) {
            return res.send ("Por favor, envie um arquivo")
        }

        ServicoModel.createOne(req)
        res.send("O produto de nome " + req.body.nome + " foi criado com sucesso")
    },
    buscaServico: (req, res) => {

        res.send(ServicoModel.findOne(req))
    },
    listaServico: (req, res) => {
        res.send(ServicoModel.findByParams(req))
    },
    deletaServico: (req, res) => {
        ServicoModel.deleteOne(req)
        res.send("O produto de id " + req.body.id + " foi deletado com sucesso")
    },
    atualizaServico: (req, res) => {
        ServicoModel.updateOne(req)
        res.send("O produto de id " + req.body.id + " foi atualizado com sucesso")
    }
}
