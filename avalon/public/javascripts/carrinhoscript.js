if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}else {
    ready()
}

// function ready(){
//     const removelivro = document.getElementsByClassName("remove-livro-button")
//     for (var i = 0; i < removelivro.length; i++) {
//         removelivro[i].addEventListener("click", removeProduct) 
       
//     }

//     const quantityInputs = document.getElementsByClassName("quantity")
//     for (var i = 0; i < quantityInputs.length; i++){
//         quantityInputs[i].addEventListener("change",checkIfinputInsNull )        
//     }

//     const addToCarButtons = document.getElementsByClassName("comprar")
//     for (var i = 0; i < addToCarButtons.length; i++) {
//         addToCarButtons[i].addEventListener("click", addProductToCart)      
//     }
   
    
// }

// function checkIfinputInsNull(event){
//     if (event.target.value ==="0"){
//         event.target.parentElement.parentElement.remove()
//     }


//     updateTotal()

// }





// function removeProduct(event){
//     event.target.parentElement.parentElement.remove()
//     updateTotal()
// }

let somaCarrinho = 0
let desconto = 9
let frete = 0 

let  carlivros = document.getElementById("produto-carrinho").children

for (var i = 0; i < carlivros.length; i++){
        totalAmount = 0
        productPrice = carlivros[i].getElementsByClassName("livro-preco")[0].innerText.replace("R$","").replace(",", ".")
        productQuantity = carlivros[i].getElementsByClassName("quantity")[0].value
        totalAmount +=  productPrice * productQuantity
       
        somaCarrinho += totalAmount
        totalAmount = totalAmount.toFixed(2)
        totalAmount = totalAmount.replace(".",",")
        carlivros[i].getElementsByClassName("cart-total")[0].innerText = "R$" + totalAmount
        //     document.querySelector(".cart-total").innerText = "R$" + totalAmount
        // }
        
    }
    somaCarrinho = somaCarrinho.toFixed(2)
    somaCarrinho = somaCarrinho.replace(".",",")
    document.getElementById("cart-total-subtotal").innerText ="R$" + somaCarrinho
    document.getElementById("cart-total-subtotal-2").innerText ="R$" + somaCarrinho
    desconto = desconto.toFixed(2)
    desconto = desconto.replace(".",",")
    frete = frete.toFixed(2)
    frete = frete.replace(".",",")
    document.getElementById("cart-total-desconto").innerText ="R$ -" + desconto
    
    const totalFinal = (somaCarrinho - desconto) + frete
    totalFinal = totalFinal.toFixed(2)
    totalFinal = totalFinal.replace(".",",")
    console.log(totalFinal)
    document.getElementById("cart-total-Final").innerText ="R$" + totalFinal




    
   

   


    

