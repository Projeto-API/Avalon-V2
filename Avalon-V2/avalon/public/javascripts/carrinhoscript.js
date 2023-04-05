



//----------PAGINA DE ITENS NO CARRINHO ------////
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  const removeLivro = document.getElementsByClassName("remove-livro-button");
  for (let i = 0; i < removeLivro.length; i++) {
    removeLivro[i].addEventListener("click", removeProduct);
  }
  const quantityInputs = document.getElementsByClassName("produto-quantidade");
  for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", checkIfInputIsNotNull);
  }
  const addToCartButtons = document.getElementsByClassName("comprar");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addProductToCart);
  }
  carrinhoAtualizacao(true);
}
function checkIfInputIsNotNull(event) {
  if (event.target.value === "0") {
    event.target.parentElement.parentElement.remove();
  }
  carrinhoAtualizacao(false);
}
function removeProduct(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  carrinhoAtualizacao(false);
}
function addProductToCart(event) {
  carrinhoAtualizacao(false);
}
function carrinhoAtualizacao(primeiroCarregamento) {
  let somaCarrinho = 0;
  const desconto = 9;
  const cifrao = "R$ ";
  let carLivros = document.getElementById("produto-carrinho").children;

  for (let i = 0; i < carLivros.length; i++) {
    let totalAmount = 0;
    let productPrice;
    if (primeiroCarregamento) {
      carLivros[i].getElementsByClassName("livro-preco")[0].innerText = cifrao + carLivros[i].getElementsByClassName("livro-preco")[0].innerText.replace(".", ",");
    }
    productPrice = parseFloat(carLivros[i].getElementsByClassName("livro-preco")[0].innerText.replace(".", ",").replace("R$", ""));
    productQuantity = carLivros[i].getElementsByClassName("produto-quantidade")[0].value;
    totalAmount += productPrice * productQuantity;
    somaCarrinho += totalAmount;
    totalAmount = totalAmount.toFixed(2);
    totalAmount = totalAmount.replace(".", ",");
    carLivros[i].getElementsByClassName("cart-total")[0].innerText = cifrao + totalAmount;
  }
  const descricaoValorZero = cifrao + "0,00";
  let totalFinal = somaCarrinho - desconto;
  let ajusteDesconto = totalFinal;
  somaCarrinho = somaCarrinho.toFixed(2);
  somaCarrinho = somaCarrinho.replace(".", ",");
  document.getElementById("cart-total-subtotal").innerText = cifrao + somaCarrinho;
  document.getElementById("cart-total-subtotal-2").innerText = cifrao + somaCarrinho;
  const descontoFormatted = desconto.toFixed(2).replace(".", ",");
  const cardTotalDesconto = document.getElementById("cart-total-desconto");
  if (somaCarrinho == 0) {
    document.getElementById("valor-total").innerText = descricaoValorZero;
    cardTotalDesconto.innerText = descricaoValorZero;
  } else if (ajusteDesconto < 0) {
  } else {
    totalFinal = totalFinal.toFixed(2);
    totalFinal = totalFinal.replace(".", ",");
    document.getElementById("valor-total").innerText = cifrao + totalFinal;
    cardTotalDesconto.innerText = "-" + cifrao + descontoFormatted;
    }
    }