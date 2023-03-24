if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}else {
    ready()
}

function ready(){
    const removelivro = document.getElementsByClassName("remove-livro-button")
    for (var i = 0; i < removelivro.length; i++) {
        removelivro[i].addEventListener("click", removeProduct) 
       
    }

    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for (var i = 0; i < quantityInputs.length; i++){
        quantityInputs[i].addEventListener("change",checkIfinputInsNull )
        
    }

    const addToCarButtons = document.getElementsByClassName("comprar")
    for (var i = 0; i < addToCarButtons.length; i++) {
        addToCarButtons[i].addEventListener("click", addProductToCart)      
    }
   
    
}

function checkIfinputInsNull(event){
    if (event.target.value ==="0"){
        event.target.parentElement.parentElement.remove()
    }


    updateTotal()

}


function addProductToCart(event){
    const button = event.target
    const productInfos = button.parentElement.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("item-img")[0].src
    const productTitle = productInfos.getElementsByClassName("item-name")[0].innerText
    const productPrice = productInfos.getElementsByClassName("item-price")[0].innerText
  
    let productsCarName = document.getElementsByClassName("cart-product-title")
    for (var i = 0; i < productsCarName.length; i++) {
        if(productsCarName[i].innerText === productTitle){
            console.log(productsCarName[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++)
            updateTotal()
          return
        }
        
    }

   let newCartProduct = document.createElement("section")
   newCartProduct.classList.add("containerProduto")

    newCartProduct.innerHTML = `
  
   <div class="product-identification">
        <img src="${productImage}" alt="Poster 3" class="cart-product-image">
    </div>
    <div>
        <strong class="cart-product-title">${productTitle} </strong>
    </div>
    <div>
        <span class="cart-product-price">${productPrice}</span>
    </div>
    <div>
        <input type="number" value="1" min="0" class="product-qtd-input">
    </div>
    <div>
        <button type="button" class="remove-livro-button">Remover</button>
    </div>  
    </div>
   `
    const tableBody = document.querySelector(".produto")
    tableBody.append(newCartProduct)
    updateTotal()
    newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change",checkIfinputInsNull)
    newCartProduct.getElementsByClassName("remove-livro-button")[0].addEventListener("click",removeProduct)

    
}





function removeProduct(event){
    event.target.parentElement.parentElement.remove()
    updateTotal()
}
function updateTotal(){
    let totalAmount = 0
    const carlivros = document.getElementById("produto").children 
   
        for (var i = 0; i < carlivros.length; i++){
            const productPrice = carlivros[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$","").replace(",", ".")
            const productQuantity = carlivros[i].getElementsByClassName("product-qtd-input")[0].value
            totalAmount +=  productPrice * productQuantity
        }
        totalAmount = totalAmount.toFixed(2)
        totalAmount = totalAmount.replace(".",",")
        document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
}







function abrirCarrinhoFlutuante() {
    updateTotal()
    document.getElementById('carrinhoFlutuante').style.width = "25rem"
    ready()
}

function fecharCarrinhoFlutuante() {
    updateTotal()
    document.getElementById('carrinhoFlutuante').style.width = "0rem"
    ready()
}

