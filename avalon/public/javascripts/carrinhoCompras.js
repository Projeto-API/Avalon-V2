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

    newCartProduct.querySelector(".livro-imagem").setAttribute("src", carrinho[i].productImage);
    newCartProduct.querySelector(".imagem-titulo").textContent = carrinho[i].productTitle;
    newCartProduct.querySelector(".livro-preco").textContent = carrinho[i].productPrice;
    newCartProduct.querySelector(".produto-quantidade").value = carrinho[i].productQuantity;
    newCartProduct.querySelector(".cart-total").textContent = "R$ " + (carrinho[i].productPrice * carrinho[i].productQuantity).toFixed(2);

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
  const cartRow = input.closest("tr");
  const productId = cartRow.dataset.productId;
  const quantity = input.value;
  carrinho[productId].productQuantity = quantity;
  sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
  updateCartTotal();
}

function updateCartTotal() {
  let cartTotal = 0;
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
    cartRow.getElementsByClassName("cart-total")[0].textContent = "Total: R$ " + total.toFixed(2);
    cartTotal += total;
    cartTotal2 += total + frete;
  }
  const cartTotalFinal = (cartTotal - desconto);
  document.getElementById("cart-total-subtotal").textContent = "R$ " + cartTotal.toFixed(2);
  document.getElementById("resultadoFrete").textContent = "R$ " + frete.toFixed(2);
  document.getElementById("cart-total-subtotal-2").textContent = "R$ " + cartTotal2.toFixed(2);
  document.getElementById("cart-total-desconto").textContent = "R$ -" + desconto.toFixed(2);
  document.getElementById("cart-total-Final").textContent = "R$ " + cartTotalFinal.toFixed(2);
}


function comprarAgora() {
  document.getElementById('produtosCarrinhoFinal').value = sessionStorage.getItem("carrinho")
  alert("Valor input" + document.getElementById('produtosCarrinhoFinal').value)
  console.log(carrinhoSession)



}