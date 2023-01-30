const produtoModel = require('../models/produtoModel');


module.exports = {
  index: (req, res) => {
    const servicos = ServicoModel.index(); // <--- Pedindo os dados para o modelo

    return res.render('servicos', { servicos }); // ----->  Enviando os dados para a view
  },

  admin: (req, res) => {
    const produtos = produtoModel.index();
    return res.render('crud', { produtos });
  },


  criar: (req, res) => {

    produtoModel.criar(req.body);
    return res.redirect('/produto/admin');

  },


  editar: (req, res) => {
  produtoModel.editar(req);
  res.send("O produto de id " + req.body.id + " foi atualizado com sucesso")
  },


  buscar: (req, res) => {
    const produtos = produtoModel.buscar(req)
    res.render('crud', { produtos })
},
  buscarporid: (req, res) => {
  
    const produtos = produtoModel.buscarId(req)

  res.render('editarProduto', { produtos })

},
  deletar: (req, res) => {
    const { id } = req.params;
    produtoModel.deletar(id);
    console.log("O produto de id " + req.body.id + " foi deletado com sucesso");
    return res.redirect('/produto/admin')
  }
};

 // function openModal(edit = false, index = 0) {
  //   modal.classList.add('active')
  
  //   modal.onclick = e => {
  //     if (e.target.className.indexOf('modal-container') !== -1) {
  //       modal.classList.remove('active')
  //     }
  //   }
  
  //   if (edit) {
  //     produto.nome = itens[index].nome
  //     produto.id = itens[index].id
  //     produto.valor = itens[index].valor
  //     id = index
  //   } else {
  //     produto.nome = ''
  //     produto.id = ''
  //     produto.valor = ''
  //   }
    
  // }
  
  // function editItem(index) {
  
  //   openModal(true, index)
  // }



