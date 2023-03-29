let carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];

function adicionaCarrinho() {
  const button = event.target;
  const productInfos = button.parentElement.parentElement.parentElement;
  const productImage = productInfos.getElementsByClassName("item-img")[0].src;
  const productTitle = productInfos.getElementsByClassName("item-name")[0].innerText;
  const productPrice = productInfos.getElementsByClassName("item-price")[0].innerText;

  carrinho.push({
    productImage,
    productTitle,
    productPrice,
  });

  sessionStorage.setItem("carrinho", JSON.stringify(carrinho));

  criarElementosCarrinho();
}

function criarElementosCarrinho() {
  const tableBody = document.querySelector(".produto");
  tableBody.innerHTML = "";

  for (let i = 0; i < carrinho.length; i++) {
    const newCartProduct = document.createElement("section");
    newCartProduct.classList.add("containerProduto");

    newCartProduct.innerHTML = `
      <div class="product-identification">
        <img src="${carrinho[i].productImage}" alt="Poster 3" class="cart-product-image">
      </div>
      <div>
        <strong class="cart-product-title">${carrinho[i].productTitle}</strong>
      </div>
      <div>
        <span class="cart-product-price">${carrinho[i].productPrice}</span>
      </div>
      <div>
        <input type="number" value="1" min="0" class="product-qtd-input"></input>
      </div>
      <div>
        <button type="button" class="remove-livro-button">Remover</button>
      </div>
    `;

    tableBody.appendChild(newCartProduct);
  }
}

    