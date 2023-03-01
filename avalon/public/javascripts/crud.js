const modal = document.querySelector('.modal-container')


function openModal() {
    modal.classList.add('active');

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }
}


function editModal(Livro = "{}") {

    modal.classList.add('active');
    if (Livro) {
        Livro = JSON.parse(Livro)
        const inputName = document.querySelector('.form-crud input[name="nome"]')
        inputName.value = Livro.nome

        const inputValor = document.querySelector('.form-crud input[name="valor"]')
        inputValor.value = Livro.valor

        const inputCategoria = document.querySelector('.form-crud input[name="categoria"]')
        inputCategoria.value = Livro.categoria

        const inputAutor = document.querySelector('.form-crud input[name="autor"]')
        inputAutor.value = Livro.autor

        const inputEditora = document.querySelector('.form-crud input[name="editora"]')
        inputEditora.value = Livro.editora

        const sinopse = document.querySelector('.form-crud input[name="sinopse"]')
        sinopse.value = Livro.sinopse

        const inputIMG = document.querySelector('.form-crud input[name="capaImg"]')
        inputIMG.value = Livro.capaImg


        const form = document.querySelector('.form-crud')
        form.action = `/admin/editar/${livro.id}?_method=PUT`

    }

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }
}


