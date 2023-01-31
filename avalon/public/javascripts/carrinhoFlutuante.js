function abrirCarrinhoFlutuante() {
    document.getElementById('carrinhoFlutuante').style.width = "35rem"
}

function fecharCarrinhoFlutuante() {
    document.getElementById('carrinhoFlutuante').style.width = "0rem"
}




function excluirDentroCarrinho(excluiProduto) {

    let arrayDiv = document.getElementsByTagName("div");

    for (let index = 0; index < arrayDiv.length; index++) {
        var element = arrayDiv[index]
        if(element.id == excluiProduto){
            element.style.display= "none"
        }
    }
    
}

function incluirDentroCarrinho() {
    let em = document.createElement('em')
//     em.innerHTML = `<div class="produto" id="produto4">
//     <img class="imagemProduto" src="../produtos/my broken mariko/mariko-capa.jpg" alt="">
//     <div class="informationProduto">        
//         <div class="nomeProduto">
//             <h5 id="produtoTitulo">MY BROKEN MARIKO</h5>
//         </div>
//         <div class="informationProdutoValue">
//             <div>
//                 <a href="" class="diminuirQtd">-</a>
//                 <input type="number" class="quantidadeValue" value="1">
//                 <a href="" class="aumentarQtd">+</a>
//             </div>
//             <span id="preco"> R$ 39,90 </span>
//             <button id="excluir"  onclick="excluirDentroCarrinho('produto4')">X</button>
//         </div>
//     </div>
// </div>`
    document.querySelector('#containerProduto').appendChild(em)
}
var cart = [];

function addToCart(produto) {
  cart.push(produto);
  console.log(produto + " foi adicionado ao carrinho.");
}

function removeFromCart(produto) {
  var index = cart.indexOf(produto);
  if (index > -1) {
    cart.splice(index, 1);
    console.log(produto + " foi removido do carrinho.");
  } else {
    console.log(produto + " não foi encontrado no carrinho.");
  }
}

function viewCart() {
  if (cart.length > 0) {
    console.log("Itens no carrinho:");
    for (var i = 0; i < cart.length; i++) {
      console.log(cart[i]);
    }
  } else {
    console.log("O carrinho está vazio.");
  }
}