if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

function ready() {
    const removelivro = document.getElementsByClassName("remove-livro-button")
    for (var i = 0; i < removelivro.length; i++) {
        removelivro[i].addEventListener("click", removeProduct)

    }

    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for (var i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("change", checkIfinputInsNull)

    }

    const addToCarButtons = document.getElementsByClassName("comprar")
    for (var i = 0; i < addToCarButtons.length; i++) {
        addToCarButtons[i].addEventListener("click", addProductToCart)
    }
}

function checkIfinputInsNull(event) {
    if (event.target.value === "0") {
        event.target.parentElement.parentElement.parentElement.remove()
    }
    updateTotal()
}

function removeProduct(event) {
    console.log(event)
    event.target.parentElement.parentElement.parentElement.remove()
    updateTotal()
}

function addProductToCart(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("item-img")[0].src
    const productTitle = productInfos.getElementsByClassName("item-name")[0].innerText
    const productPrice = productInfos.getElementsByClassName("item-price")[0].innerText

    let productsCarName = document.getElementsByClassName("cart-product-title")
    for (var i = 0; i < productsCarName.length; i++) {
        if (productsCarName[i].innerText === productTitle) {
            console.log(productsCarName[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++)
            return
        }

    }

    let newCartProduct = document.createElement("div")
    newCartProduct.classList.add("produto-carrinho")
    console.log("Estou aqui!!!")
    localStorage.setItem = ('carrinho', JSON.stringify({ productImage }))

    newCartProduct.innerHTML = `
        <div class="product-identification">
            <img class="cart-product-image" src="${productImage}" alt="Poster 3">
        </div>
        <div class="informationLivro">
            <h5 class="cart-product-title" id="LivroTitulo">${productTitle}</h5>
            <div class="informationLivroValue">
                <input onclick=checkIfinputInsNull(event) type="number" value="1" min="0" class="product-qtd-input">
                <span class="cart-product-price">${productPrice}	</span>
                <button onclick=removeProduct(event) type="button" class="remove-livro-button">X</button>
            </div>
        </div>`

    const tableBody = document.querySelector(".produtos-carrinho")
    tableBody.append(newCartProduct)
    updateTotal(newCartProduct)
}


function removeProduct(event) {
    console.log(event)
    event.target.parentElement.parentElement.parentElement.remove()
    updateTotal()
}
function updateTotal() {
    let totalAmount = 0
    const carlivros = document.getElementsByClassName("produto")
    for (var i = 0; i < carlivros.length; i++) {
        const productPrice = carlivros[i].getElementsByClassName("cart-product-price")[0].innerText
        // const productPrice = carlivros[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
        const productQuantity = carlivros[i].getElementsByClassName("product-qtd-input")[0].value
        totalAmount += productPrice * productQuantity
    }
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
}


function abrirCarrinhoFlutuante() {
    document.getElementById('carrinhoFlutuante').style.width = "25rem"
    updateTotal()
}

function fecharCarrinhoFlutuante() {

    document.getElementById('carrinhoFlutuante').style.width = "0rem"
}