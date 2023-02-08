let formCarrinho = document.getElementById("formCarrinho")
    formCarrinho.onsubmit = function (event){
        event.preventDefault()
        let carrinho = JSON.parse(localStorage.getItem("carrinho"))
        let inputProdutos = document.getElementById("produtosCarrinho")
        inputProdutos.value = carrinho.map(item => item.id)
        this.submit()
    }

function abrirCarrinhoFlutuante() {
    document.getElementById('carrinhoFlutuante').style.width = "20rem"
}

function fecharCarrinhoFlutuante() {
    document.getElementById('carrinhoFlutuante').style.width = "0"
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

// carrinho.map((item, index)=>{


//     let carrinho = JSON.parse(localStorage.getItem("carrinho"));

//     carrinho.setAttribute('data-key', index);
//     carrinho.querySelector('.imagemProduto').src = imagem.img;
    
// });



//Carrinho 

let modalQt=1; 


const c = (el) =>document.querySelector(el);
const cs = (el) =>document.querySelectorAll(el);

c('.button.increase').addEventListener('click', ()=>{
    modalQt ++;
    c('.quantity').innerHTML = modalQt;

    
})
c('.button.decrease').addEventListener('click', ()=>{
    if(modalQt > 1 ){
        modalQt --;
        c('.quantity').innerHTML = modalQt;
    }

})