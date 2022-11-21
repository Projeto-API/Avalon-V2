
function abrirCarrinhoFlutuante() {
    document.getElementById('carrinhoFlutuante').style.width = "22rem"
}

function fecharCarrinhoFlutuante() {
    document.getElementById('carrinhoFlutuante').style.width = "0"
}


function excluirDentroCarrinho(excluiProduto ) {

    let arrayDiv = document.getElementsByTagName("div");

    for (let index = 0; index < arrayDiv.length; index++) {
        var element = arrayDiv[index]
        if(element.id == excluiProduto){
            element.style.display= "none"
        }
    }
    
}



