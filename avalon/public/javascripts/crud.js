const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')


let itens
let id

function openModal(editar = false, index = 0) {
    modal.classList.add('active');

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }
 
}
