const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sTitulo = document.querySelector('#titulo')
const sPreco = document.querySelector('#preco')

const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
    modal.classList.add('active');

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

    if (edit) {
        sTitulo.value = itens[index].titulo
        sPreco.value = itens[index].preco
        id = index
    } else {
        sTitulo.value = ''
        sPreco.value = ''
    }

}

// function editItem(index) {

//     openModal(true, index)
// }

// function deleteItem(index) {
//     itens.splice(index, 1)
//     setItensBD()
//     loadItens()
// }

// function insertItem(item, index) {
//     let tr = document.createElement('tr')

//     tr.innerHTML = `
//     <td><input type="checkbox"></td>
//     <td>${item.index}</td>
//     <td>${item.titulo}</td>
//     <td>R$ ${item.preco}</td>
//     <td class="acao">
//       <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
//     </td>
//     <td class="acao">
//       <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
//     </td>
//   `
//     tbody.appendChild(tr)
// }



// btnSalvar.onclick = e => {



//     e.preventDefault();

//     if (id !== undefined) {
//         itens[id].titulo = sTitulo.value
//         itens[id].preco = sPreco.value
//     } else {
//         itens.push({ 'titulo': sTitulo.value, 'preco': sPreco.value})
//     }

//     setItensBD()

//     modal.classList.remove('active')
//     loadItens()
//     id = undefined
// }

// function loadItens() {
//     itens = getItensBD()
//     tbody.innerHTML = ''
//     itens.forEach((item, index) => {
//         insertItem(item, index)
//     })

// }


// loadItens()