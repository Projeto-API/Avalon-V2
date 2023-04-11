if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

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

function makePurchase() {
  if (totalAmount === "0,00")

    criarElementosCompra()

}


function criarElementosCompra() {
  const finalizaPedido = document.getElementById("produto-carrinho");
  console.log(finalizaPedido)
  const modelCartProduct = document.getElementById("produto-");
  finalizaPedido.innerHTML = " "; // clear the table first
  for (let i = 0; i < carrinho.length; i++) {
    const newCartProduct = modelCartProduct.cloneNode(true);
    const removeButton = document.createElement("span");
    newCartProduct.id = "produto-" + i;

    newCartProduct.querySelector(".livro-imagem-cart").setAttribute("src", carrinho[i].productImage);
    newCartProduct.querySelector(".imagem-titulo").textContent = carrinho[i].productTitle;
    newCartProduct.querySelector(".livro-preco").textContent = carrinho[i].productPrice;
    
    newCartProduct.querySelector(".produto-quantidade").value = carrinho[i].productQuantity;
    newCartProduct.querySelector(".livro-remove .cart-total").textContent = "R$ " + (parseFloat(carrinho[i].productPrice.substring(2)) * carrinho[i].productQuantity).toFixed(2);

    console.log(carrinho[i].productPrice)
    console.log(carrinho[i].productQuantity)

    removeButton.classList.add("remove-livro-button");
    removeButton.textContent = "X";

    newCartProduct.querySelector(".livro-remove").appendChild(removeButton);

    removeButton.addEventListener("click", function () {
      const productId = newCartProduct.dataset.productId;
      carrinho.splice(productId, 1);
      sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
      newCartProduct.remove();
      updateCartTotal();
    });
    finalizaPedido.appendChild(newCartProduct);
    newCartProduct.querySelector(".produto-quantidade").addEventListener("change", checkIfInputIsNotNull);
    newCartProduct.dataset.productId = i;
  }
  updateCartTotal();
}


function checkIfInputIsNotNull(event) {
  const input = event.target;
  if (input.value <= 0) {
    input.value = 1;
  }
  const cartRow = input.closest("div");
  const productId = cartRow.dataset.productId;
  const quantity = input.value;
  productQuantity = quantity;
  sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
  updateCartTotal();
}

function updateCartTotal() {
  let cartTotal = 0;
  let desconto = 10;
  let frete = parseFloat(document.getElementById("resultadoFrete").textContent.substring(2));
  let cartTotal2 = 0;
  const cartRows = document.getElementById("produto-carrinho").querySelectorAll(".produto-cart");
  console.log(cartRows)
  for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.querySelector(".livro-preco");
    console.log(priceElement)
    const quantityElement = cartRow.querySelector(".produto-quantidade");
    console.log(quantityElement)
    const price = parseFloat(priceElement.textContent.substring(2));
    const quantity = quantityElement.value;
    const total = price * quantity;
    cartRow.querySelector(".cart-total").textContent = "Total: R$ " + total.toFixed(2);
    cartTotal += total;
    cartTotal2 += total + frete;
  }
  const cartTotalFinal = (cartTotal + frete - desconto);
  document.getElementById("cart-total-subtotal").textContent = "R$ " + cartTotal.toFixed(2);
  document.getElementById("resultadoFrete").textContent = "R$ " + frete.toFixed(2);
  document.getElementById("cart-total-desconto").textContent = "R$  -" + desconto.toFixed(2);
  document.getElementById("cart-total-Final").textContent = "R$ " + cartTotalFinal.toFixed(2);
}


function comprarAgora() {
  document.getElementById('produtosCarrinhoFinal').value = sessionStorage.getItem("carrinho")
  alert("Valor input" + document.getElementById('produtosCarrinhoFinal').value)
  console.log(carrinhoSession)



}
