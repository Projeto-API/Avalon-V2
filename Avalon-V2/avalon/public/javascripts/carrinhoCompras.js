if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
    updatePedido();
} else {
    ready()
    updatePedido();
}

function ready() {
    const removelivro = document.getElementsByClassName("remove-livro-button")
    for (let i = 0; i < removelivro.length; i++) {
        removelivro[i].addEventListener("click", removeProduct)
        updatePedido();
    }


    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for (let i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("change", checkIfinputInsNull)
        updatePedido();
    }




    if (sessionStorage.getItem("carrinho")) {
        carrinho = JSON.parse(sessionStorage.getItem("carrinho"));
        criarElementosCompra();
        updatePedido();
    }

    updatePedido();
}



function criarElementosCompra() {
  
    const finalizaPedido = document.querySelector(".carrinho-itens");
    const modelCartProduct = document.getElementById("carrinho-body");
  
    for (let i = 0; i < carrinho.length; i++) {
      const newCartProduct = modelCartProduct.cloneNode(true);
      newCartProduct.classList.add("tabela-produtos");
      updatePedido()
  
      newCartProduct.innerHTML = `
        <div class="product-identification">
          <img src="${carrinho[i].productImage}" class="cart-product-image">
        </div>
        <div>
          <strong class="cart-product-title">${carrinho[i].productTitle}</strong>
        </div>
        <div>
          <span class="cart-product-price">${carrinho[i].productPrice}</span>
        </div>
        <div>
          <input type="number" value="1" min="0" class="product-qtd-input">
        </div>
        <div>
          <span class="cart-total-container"> R$ <span>
        </div>
        <div>
          <button type="button" class="remove-livro-button">Remover</button>
        </div>
      `;
      updatePedido() 
      finalizaPedido.appendChild(newCartProduct);
      newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfinputInsNull)
      newCartProduct.getElementsByClassName("remove-livro-button")[0].addEventListener("click", removePedido)
      updatePedido() 
    }
  }



  function updatePedido() {
      let totalAmount = 0
      const pedidoLivro = document.getElementById("carrinho-body").children
     for (var i = 0; i < pedidoLivro.length; i++) {
        const productPrice = pedidoLivro[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
        const productQuantity = pedidoLivro[i].getElementsByClassName("product-qtd-input")[0].value
        totalAmount += productPrice * productQuantity
        updatePedido()


    }
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector(".cart-total-container").innerText = "R$" + totalAmount


}

function removePedido(event) {
    const item = event.target.parentElement.parentElement;
    const tableBody = document.querySelector(".carrinho-itens").children;

    tableBody.removeChild(item);
    const productTitle = item.getElementsByClassName("cart-product-title")[0].innerText;
    carrinho = carrinho.filter(item => item.productTitle !== productTitle);
    updatePedido();

    if (tableBody.children.length === 0) {
        sessionStorage.clear();
        
    } else {
        sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

    updatePedido();
}








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
