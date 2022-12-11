const botoesComprar = document.querySelectorAll(".comprar")


botoesComprar.forEach(comprar,i =>{
    const containerServico = document.getElementById("livro-" + i);
    const imagemLivro = containerServico.children[0].children[0].src;
    const nomeLivro = containerServico.children[1].children[1].innerText;
    const valorLivro = containerServico.children[1].children[2].innerText;
    const idLivro = containerServico.children[1].children[3].value; 

    const servico = {
        id: idServico,
        nome: nomeServico,
        valor: valorServico,
        descricao: descricaoServico,
        imagem: imagemServico,
        quantidade: 1
    }
   

})

