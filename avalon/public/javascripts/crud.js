const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sTitulo = document.querySelector('#titulo')
const sPreco = document.querySelector('#preco')

const btnSalvar = document.querySelector('#btnSalvar')

// Get the <span> element that closes the modal
var btnCancelar = document.getElementById("cancelarModal");



// When the user clicks on <span> (x), close the modal
btnCancelar.onclick = function() {
  modal.style.display = "none";
}
