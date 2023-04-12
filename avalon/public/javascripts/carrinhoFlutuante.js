let carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
    updateTotal();
} else {
    ready()
    updateTotal();
}

function ready() {
    const removelivro = document.getElementsByClassName("remove-livro-button")
    for (let i = 0; i < removelivro.length; i++) {
        removelivro[i].addEventListener("click", removeProduct)
<<<<<<< HEAD
        
=======

>>>>>>> palomacode
    }


    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for (let i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("change", checkIfinputInsNull)
<<<<<<< HEAD
        
=======

>>>>>>> palomacode
    }


    const addToCarButtons = document.getElementsByClassName("comprar")
    for (let i = 0; i < addToCarButtons.length; i++) {
        addToCarButtons[i].addEventListener("click", adicionaCarrinho)
<<<<<<< HEAD
        
=======

>>>>>>> palomacode
    }


    if (sessionStorage.getItem("carrinho")) {
        carrinho = JSON.parse(sessionStorage.getItem("carrinho"));
        criarElementosCarrinho();
<<<<<<< HEAD
        
=======

>>>>>>> palomacode
    }

    updateTotal();
}



function checkIfinputInsNull(event) {
    const item = event.target.parentElement.parentElement.parentElement.parentElement;
    const productTitle = item.querySelector(".cart-product-title").innerText;
    const cartItem = carrinho.find(item => item.productTitle === productTitle);
  
    if (event.target.value === "0") {
<<<<<<< HEAD
        event.target.parentElement.parentElement.remove();
        const productTitle = event.target.parentElement.parentElement.getElementsByClassName("cart-product-title")[0].innerText;
        carrinho = carrinho.filter(item => item.productTitle !== productTitle);
        updateTotal();
        sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
=======
      item.remove();
      carrinho = carrinho.filter(item => item.productTitle !== productTitle);
      sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
>>>>>>> palomacode
    } else {
      if (cartItem) {
        cartItem.quantity = event.target.value;
        sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
      }
    }
    updateTotal();
<<<<<<< HEAD
}
=======
  }
  
>>>>>>> palomacode

function adicionaCarrinho(event) {
    const button = event.target;
    const productInfos = button.parentElement.parentElement.parentElement;
    const productImage = productInfos.getElementsByClassName("item-img")[0].src;
    const productTitle = productInfos.getElementsByClassName("item-name")[0].innerText;
    const productPrice = productInfos.getElementsByClassName("item-price")[0].innerText;

    let produtoExistente = false;

    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].productTitle === productTitle) {
            carrinho[i].productQuantity = productInfos.getElementsByClassName('product-qtd-input')[0].value;
            produtoExistente = true;
            break;
        }
    }

    if (!produtoExistente) {
        carrinho.push({
            productImage,
            productTitle,
            productPrice,
            productQuantity: 1
        });
    }

    sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
    criarElementosCarrinho();
    updateTotal();
    abrirCarrinhoFlutuante()
}


function criarElementosCarrinho() {
    updateTotal()
    const tableBody = document.querySelector(".produto");
    tableBody.innerHTML = "";
    // count = 0
<<<<<<< HEAD
    
=======

>>>>>>> palomacode
    for (let i = 0; i < carrinho.length; i++) {
        const newCartProduct = document.createElement("section");
        newCartProduct.classList.add("containerProduto");
        // count++
        // newCartProduct.setAttribute("id", "idProduto" + count);



        newCartProduct.innerHTML = `
             <div class="product-identification">
              <img src="${carrinho[i].productImage}" alt="Poster 3" class="cart-product-image">
             </div>
             <div class="product-name">
                <div>
                 <strong class="cart-product-title">${carrinho[i].productTitle}</strong>
                </div>
                <div>
                    <span class="cart-product-price">${carrinho[i].productPrice}</span>
                </div>
                <div class="product-information">
                 <div>
                     <input type="number" value="1" min="0" class="product-qtd-input">
                 </div>
                <div>
                 <button type="button" class="remove-livro-button">X</button>
                 </div>
                </div>
             </div>
          `;
        updateTotal()
        tableBody.appendChild(newCartProduct);
        newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfinputInsNull)
        newCartProduct.getElementsByClassName("remove-livro-button")[0].addEventListener("click", removeProduct)
        updateTotal()
<<<<<<< HEAD
        
        
=======


>>>>>>> palomacode
    }
}
function loadCarrinho() {
    const carrinhoSession = sessionStorage.getItem("carrinho");
    if (carrinhoSession) {
        carrinho = JSON.parse(carrinhoSession);
        criarElementosCarrinho();
        updateTotal();
    }
}


function removeProduct(event) {
    const item = event.target.parentElement.parentElement.parentElement.parentElement;
    const tableBody = document.querySelector(".produto");
  
    tableBody.removeChild(item);
    const productTitle = item.querySelector(".cart-product-title").innerText;
    carrinho = carrinho.filter(item => item.productTitle !== productTitle);
    updateTotal();
  
    if (tableBody.children.length === 0) {
      sessionStorage.clear();
      updateTotal();
    } else {
      sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  
    updateTotal();
  }


  function updateTotal() {
    let totalAmount = 0
    const produtos = document.getElementById("produto").children

<<<<<<< HEAD

    for (var i = 0; i < carlivros.length; i++) {
        const productPrice = carlivros[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
        const productQuantity = carlivros[i].getElementsByClassName("product-qtd-input")[0].value
=======
    for (var i = 0; i < produtos.length; i++) {
        const productPrice = produtos[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
        const productQuantity = produtos[i].getElementsByClassName("product-qtd-input")[0].value
>>>>>>> palomacode
        totalAmount += productPrice * productQuantity
    }
    
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
}

function abrirCarrinhoFlutuante() {

    document.getElementById('carrinhoFlutuante').style.width = "365px"
    updateTotal()

}

function fecharCarrinhoFlutuante() {

    document.getElementById('carrinhoFlutuante').style.width = "00"
    updateTotal()

}