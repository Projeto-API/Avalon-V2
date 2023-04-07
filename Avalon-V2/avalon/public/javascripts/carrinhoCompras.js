if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

var cartTotal = "0,00";

function ready() {
  const removeLivro = document.getElementsByClassName("remove");
  for (let i = 0; i < removeLivro.length; i++) {
    removeLivro[i].addEventListener("click", removeProduct);
  }
  
  const quantityInputs = document.getElementsByClassName("produto-quantidade");
  for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", checkIfInputIsNotNull);
  }
  
  if (sessionStorage.getItem("carrinho")) {
    carrinho = JSON.parse(sessionStorage.getItem("carrinho"));
    criarElementosCompra();
  }

  const purchaseButton = document.getElementsByClassName("finalizarCompra")
  purchaseButton.addEventListener("click", makePurchase)
}

function makePurchase(){
  if(totalAmount === "0,00"){
    alert("Seu Carrinho esta vazio!")
  }else {
    criarElementosCompra()
  }

}


function criarElementosCompra() {
  const finalizaPedido = document.getElementById("produto-carrinho");
  const modelCartProduct = document.getElementById("produto-");
  finalizaPedido.innerHTML = ""; // clear the table first
  for (let i = 0; i < carrinho.length; i++) {
    const newCartProduct = modelCartProduct.cloneNode(true);
    const removeButton = document.createElement("button");
    newCartProduct.id = "produto-" + i;
    newCartProduct.getElementsByClassName("livro-id")[0].textContent = i + 1;
    newCartProduct.getElementsByClassName("livro-imagem")[0].getElementsByTagName("img")[0].src = carrinho[i].productImage;
    newCartProduct.getElementsByClassName("imagem-titulo")[0].textContent = carrinho[i].productTitle;
    newCartProduct.getElementsByClassName("livro-preco")[0].textContent = carrinho[i].productPrice;
    newCartProduct.getElementsByClassName("produto-quantidade")[0].value = carrinho[i].productQuantity;
    newCartProduct.getElementsByClassName("cart-total")[0].textContent = "R$ " + (carrinho[i].productPrice * carrinho[i].productQuantity).toFixed(2);
    removeButton.classList.add("remove-livro-button");
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", function() {
      const productId = newCartProduct.dataset.productId;
      carrinho.splice(productId, 1);
      sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
      newCartProduct.remove();
      updateCartTotal();
    });
    newCartProduct.appendChild(removeButton);
    finalizaPedido.appendChild(newCartProduct);
    newCartProduct.getElementsByClassName("produto-quantidade")[0].addEventListener("change", checkIfInputIsNotNull);
    newCartProduct.dataset.productId = i;
  }
  updateCartTotal(); // call the function to update the cart total
}



function checkIfInputIsNotNull(event) {
  const input = event.target;
  if (input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}
function updateCartTotal() {
  cartTotal = 0;
  let desconto = 9;
  let frete = 9;
  let cartTotal2 = 0;
  const cartRows = document.getElementById("produto-carrinho").getElementsByTagName("tr");
  for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.getElementsByClassName("livro-preco")[0];
    const quantityElement = cartRow.getElementsByClassName("produto-quantidade")[0];
    const price = parseFloat(priceElement.textContent.replace("R$ ", ""));
    const quantity = quantityElement.value;
    const total = price * quantity;
    cartRow.getElementsByClassName("cart-total")[0].textContent = "R$ " + total.toFixed(2);
    cartTotal += total ;
    cartTotal2 += total +frete ;
  }
  const cartTotalFinal = (cartTotal - desconto);
  document.getElementById("cart-total-subtotal").textContent = "R$ " + cartTotal.toFixed(2);
  document.getElementById("resultadoFrete").textContent = "R$ " + frete.toFixed(2);
  document.getElementById("cart-total-subtotal-2").textContent = "R$ " + cartTotal2.toFixed(2);
  document.getElementById("cart-total-desconto").textContent = "R$ -" + desconto.toFixed(2);
  document.getElementById("cart-total-Final").textContent = "R$ " + cartTotalFinal.toFixed(2);
}


// /   let totalFinal = somaCarrinho - desconto;
//   let ajusteDesconto = totalFinal;
//   somaCarrinho = somaCarrinho.toFixed(2);
//   somaCarrinho = somaCarrinho.replace(".", ",");
//   document.getElementById("cart-total-subtotal").innerText = cifrao + somaCarrinho;
//   document.getElementById("cart-total-subtotal-2").innerText = cifrao + somaCarrinho;
//   const descontoFormatted = desconto.toFixed(2).replace(".", ",");
//   const cardTotalDesconto = document.getElementById("cart-total-desconto");




//   function updatePedido() {
//     let totalAmount = 0
//       const pedidoLivro = document.getElementById("produto-carrinho")
//      for (var i = 0; i < pedidoLivro.length; i++) {
//         const productPrice = pedidoLivro[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
//         const productQuantity = pedidoLivro[i].getElementsByClassName("product-qtd-input")[0].value
//         totalAmount += productPrice * productQuantity
        
//       }
//       totalAmount = totalAmount.toFixed(2)
//       totalAmount = totalAmount.replace(".", ",")
//       document.querySelector(".cart-total-container").innerText = "R$" + totalAmount


    


// }

// function removePedido(event) {
//     const item = event.target.parentElement.parentElement;
//     const tableBody = document.querySelector(".carrinho-itens").children;

//     tableBody.removeChild(item);
//     const productTitle = item.getElementsByClassName("cart-product-title")[0].innerText;
//     carrinho = carrinho.filter(item => item.productTitle !== productTitle);
//     updatePedido();

//     if (tableBody.children.length === 0) {
//         sessionStorage.clear();
        
//     } else {
//         sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
//         updatePedido();
//     }

// }








// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", ready);
// } else {
//   ready();
// }
// function ready() {
//   const removeLivro = document.getElementsByClassName("remove-livro-button");
//   for (let i = 0; i < removeLivro.length; i++) {
//     removeLivro[i].addEventListener("click", removeProduct);
//   }
//   const quantityInputs = document.getElementsByClassName("produto-quantidade");
//   for (let i = 0; i < quantityInputs.length; i++) {
//     quantityInputs[i].addEventListener("change", checkIfInputIsNotNull);
//   }
//   const addToCartButtons = document.getElementsByClassName("comprar");
//   for (let i = 0; i < addToCartButtons.length; i++) {
//     addToCartButtons[i].addEventListener("click", addProductToCart);
//   }
//   carrinhoAtualizacao(true);
// }
// function checkIfInputIsNotNull(event) {
//   if (event.target.value === "0") {
//     event.target.parentElement.parentElement.remove();
//   }
//   carrinhoAtualizacao(false);
// }
// function removeProduct(event) {
//   const buttonClicked = event.target;
//   buttonClicked.parentElement.parentElement.remove();
//   carrinhoAtualizacao(false);
// }
// function addProductToCart(event) {
//   carrinhoAtualizacao(false);
// }
// function carrinhoAtualizacao(primeiroCarregamento) {
//   let somaCarrinho = 0;
//   const desconto = 9;
//   const cifrao = "R$ ";
//   let carLivros = document.getElementById("produto-carrinho").children;

//   for (let i = 0; i < carLivros.length; i++) {
//     let totalAmount = 0;
//     let productPrice;
//     if (primeiroCarregamento) {
//       carLivros[i].getElementsByClassName("livro-preco")[0].innerText = cifrao + carLivros[i].getElementsByClassName("livro-preco")[0].innerText.replace(".", ",");
//     }
//     productPrice = parseFloat(carLivros[i].getElementsByClassName("livro-preco")[0].innerText.replace(".", ",").replace("R$", ""));
//     productQuantity = carLivros[i].getElementsByClassName("produto-quantidade")[0].value;
//     totalAmount += productPrice * productQuantity;
//     somaCarrinho += totalAmount;
//     totalAmount = totalAmount.toFixed(2);
//     totalAmount = totalAmount.replace(".", ",");
//     carLivros[i].getElementsByClassName("cart-total")[0].innerText = cifrao + totalAmount;
//   }
//   const descricaoValorZero = cifrao + "0,00";
//   let totalFinal = somaCarrinho - desconto;
//   let ajusteDesconto = totalFinal;
//   somaCarrinho = somaCarrinho.toFixed(2);
//   somaCarrinho = somaCarrinho.replace(".", ",");
//   document.getElementById("cart-total-subtotal").innerText = cifrao + somaCarrinho;
//   document.getElementById("cart-total-subtotal-2").innerText = cifrao + somaCarrinho;
//   const descontoFormatted = desconto.toFixed(2).replace(".", ",");
//   const cardTotalDesconto = document.getElementById("cart-total-desconto");
//   if (somaCarrinho == 0) {
//     document.getElementById("valor-total").innerText = descricaoValorZero;
//     cardTotalDesconto.innerText = descricaoValorZero;
//   } else if (ajusteDesconto < 0) {
//   } else {
//     totalFinal = totalFinal.toFixed(2);
//     totalFinal = totalFinal.replace(".", ",");
//     document.getElementById("valor-total").innerText = cifrao + totalFinal;
//     cardTotalDesconto.innerText = "-" + cifrao + descontoFormatted;
//     }
