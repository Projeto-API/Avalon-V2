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

    const quantityInputs = document.getElementsByClassName("produto-quantidade")
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
    carrinhoatualizacao(false)

}


carrinhoatualizacao(true)


function carrinhoatualizacao(primeiroCarregamento){

    let somaCarrinho = 0
    let desconto = 9
    const cifrao = "R$ "
    let  carlivros = document.getElementById("produto-carrinho").children
    for (var i = 0; i < carlivros.length; i++){
        totalAmount = 0
        var productPrice
        if(primeiroCarregamento)
           carlivros[i].getElementsByClassName("livro-preco")[0].innerText = cifrao + carlivros[i].getElementsByClassName("livro-preco")[0].innerText.replace(".",",")
        
        productPrice = parseFloat(carlivros[i].getElementsByClassName("livro-preco")[0].innerText.replace(".",",").replace("R$",""))
        
        productQuantity = carlivros[i].getElementsByClassName("produto-quantidade")[0].value
        totalAmount +=  productPrice * productQuantity            
        somaCarrinho += totalAmount
        totalAmount = totalAmount.toFixed(2)
        totalAmount = totalAmount.replace(".",",")
        carlivros[i].getElementsByClassName("cart-total")[0].innerText = cifrao + totalAmount
    }
    
    let descricaoValorZero = cifrao + "0,00"
    let totalFinal= somaCarrinho - desconto
    let ajusteDesconto = totalFinal 
    somaCarrinho = somaCarrinho.toFixed(2)
    somaCarrinho = somaCarrinho.replace(".",",")
    document.getElementById("cart-total-subtotal").innerText = cifrao + somaCarrinho
    document.getElementById("cart-total-subtotal-2").innerText = cifrao + somaCarrinho
    

    desconto = desconto.toFixed(2)
    desconto = desconto.replace(".",",")
    var cardTotalDesconto = document.getElementById("cart-total-desconto")
    totalFinal <= 0 ? cardTotalDesconto.innerText = descricaoValorZero : cardTotalDesconto.innerText = cifrao + "-" + desconto
    // document.getElementById("cart-total-desconto").innerText ="R$ -" + desconto

    
    totalFinal = totalFinal.toFixed(2)
    totalFinal = totalFinal.replace(".",",")
    var cardTotalFinal = document.getElementById("cart-total-Final")
            
    ajusteDesconto <= 0 ? cardTotalFinal.innerText = descricaoValorZero : cardTotalFinal.innerText = cifrao + totalFinal
    
}
    



    
   

   


    