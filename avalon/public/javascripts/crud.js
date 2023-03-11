const modal = document.querySelector('.modal-container')
const Produto = require('../../src/models/Produto')


function openModal(edit = false, index = 0) {

    const produtos = Produto.findAll();

    modal.classList.add('active');

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

    if (edit) {
        const nome = document.querySelector('.form-crud input[name="nome"]')
        nome = produtos.nome
        sFuncao.value = itens[index].funcao
        sSalario.value = itens[index].salario
        id = index
    } else {
        sNome.value = ''
        sFuncao.value = ''
        sSalario.value = ''

    }
}

function editItem(index) {
    openModal(true, index)
}
// function openModal(Produto = "{}") {

//     modal.classList.add('active');
//     if (Produto) {
//         const { Produto } = require('../models')
//         const inputName = document.querySelector('.form-crud input[name="nome"]')
//         inputName.value = Produto.nome

//         const inputValor = document.querySelector('.form-crud input[name="valor"]')
//         inputValor.value = Produto.valor

//         const inputCategoria = document.querySelector('.form-crud input[name="categoria"]')
//         inputCategoria.value = Produto.categoria

//         const inputAutor = document.querySelector('.form-crud input[name="autor"]')
//         inputAutor.value = Produto.autor

//         const inputEditora = document.querySelector('.form-crud input[name="editora"]')
//         inputEditora.value = Livro.editora

//         const sinopse = document.querySelector('.form-crud input[name="sinopse"]')
//         sinopse.value = Produto.sinopse

//         const inputIMG = document.querySelector('.form-crud input[name="capaImg"]')
//         inputIMG.value = Produto.capaImg


//         const form = document.querySelector('.form-crud')
//         form.action = `/produto/editar/${produto.id}?_method=PUT`

//     }

//   }


