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



function incluirDentroCarrinho() {
    let em = document.createElement('em')
    em.innerHTML = `<div class="produto" id="produto4">
    <img class="imagemProduto" src="../produtos/my broken mariko/mariko-capa.jpg" alt="">
    <div class="informationProduto">        
        <div class="nomeProduto">
            <h5 id="produtoTitulo">MY BROKEN MARIKO</h5>
        </div>
        <div class="informationProdutoValue">
            <div>
                <a href="" class="diminuirQtd">-</a>
                <input type="number" class="quantidadeValue" value="1">
                <a href="" class="aumentarQtd">+</a>
            </div>
            <span id="preco"> R$ 39,90 </span>
            <button id="excluir"  onclick="excluirDentroCarrinho('produto4')">X</button>
        </div>
    </div>
</div>`
    document.querySelector('#containerProduto').appendChild(em)
}

