function abrirCarrinhoFlutuante() {
    document.getElementById('carrinhoFlutuante').style.width = "35rem"
}

function fecharCarrinhoFlutuante() {
    document.getElementById('carrinhoFlutuante').style.width = "0rem"
}

function excluirDentroCarrinho(excluiProduto) {

    let arrayDiv = document.getElementsByTagName("div");

    for (let index = 0; index < arrayDiv.length; index++) {
        var element = arrayDiv[index]
        if(element.id == excluiProduto){
            element.style.display= "none"
        }
    }
    
}
function incluirDentroCarrinho(incluiProduto) {

  let arrayDiv = document.getElementsByTagName("div");

  for (let index = 0; index < arrayDiv.length; index++) {
      var element = arrayDiv[index]
      if(element.id == incluiProduto){
          element.style.display= "none"
      }
  }
  
}
function verDentroCarrinho() {
  if (arrayDiv.length > 0) {
    console.log("Itens no carrinho:");
    for (let i = 0; i < arrayDiv.length; i++) {
      console.log(arrayDiv[i]);
    }
  } else {
    console.log("O carrinho está vazio.");
  }
}

