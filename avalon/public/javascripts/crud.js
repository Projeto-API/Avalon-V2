const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')


function openModal() {
    modal.classList.add('active');
    

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

}

function editModal(produto = "{}") {

    modal.classList.add('active');
    if (produto) {
        produto = JSON.parse(produto)
        const inputName = document.querySelector('.form-crud input[name="nome"]')
        inputName.value = produto.nome

        const inputValor = document.querySelector('.form-crud input[name="valor"]')
        inputValor.value = produto.valor

        const inputCategoria = document.querySelector('.form-crud input[name="categoria"]')
        inputCategoria.value = produto.categoria

        const inputAutor = document.querySelector('.form-crud input[name="autor"]')
        inputAutor.value = produto.autor

        const inputEditora = document.querySelector('.form-crud input[name="editora"]')
        inputEditora.value = produto.editora

        const sinopse = document.querySelector('.form-crud input[name="sinopse"]')
        sinopse.value = produto.sinopse

        const inputIMG = document.querySelector('.form-crud input[name="capaImg"]')
        inputIMG.value = produto.capaImg


        document.querySelector('.form-crud').action = `/produto/editar/${produto.id}?_method=PUT`

    }
    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

}

