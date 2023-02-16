function abrirCarrinhoFlutuante() {
    document.getElementById('carrinhoFlutuante').style.width = "20rem"
}

function fecharCarrinhoFlutuante() {
    document.getElementById('carrinhoFlutuante').style.width = "-20rem"
}




function excluirDentroCarrinho(excluiLivro) {

    let arrayDiv = document.getElementsByTagName("div");

    for (let index = 0; index < arrayDiv.length; index++) {
        var element = arrayDiv[index]
        if(element.id == excluiLivro){
            element.style.display= "none"
        }
    }
    
}

function incluirDentroCarrinho() {
    let em = document.createElement('em')
    em.innerHTML = `<div class="Livro" id="Livro4">
    <img class="imagemLivro" src="../Livros/my broken mariko/mariko-capa.jpg" alt="">
    <div class="informationLivro">        
        <div class="nomeLivro">
            <h5 id="LivroTitulo">MY BROKEN MARIKO</h5>
        </div>
        <div class="informationLivroValue">
            <div>
                <a href="" class="diminuirQtd">-</a>
                <input type="number" class="quantidadeValue" value="1">
                <a href="" class="aumentarQtd">+</a>
            </div>
            <span id="preco"> R$ 39,90 </span>
            <button id="excluir"  onclick="excluirDentroCarrinho('Livro4')">X</button>
        </div>
    </div>
</div>`
    document.querySelector('#containerLivro').appendChild(em)
}

