const botoesComprar = document.querySelectorAll('.comprar')


botoesComprar.forEach((comprar, i) => {
    const selecionaProduto = document.getElementById("produto-" + i)
    const selecionaImagem = selecionaProduto.children[1]

    // const selecionaNome = selecionaProduto.children[1].children[0].innerText
    // const selecionaValor = selecionaProduto.children[1].children[1].innerText
    // const selecionaId = selecionaProduto.children[1].children[2].value

    const produto = {
        id: selecionaId,
        nome: selecionaNome,
        valor: selecionaValor,
        imagem: selecionaImagem,
        quantidade: 1
    }

    console.log(selecionaImagem)

})




//     const servico = {
//         id: idServico,
//         nome: nomeServico,
//         valor: valorServico,
//         descricao: descricaoServico,
//         imagem: imagemServico,
//         quantidade: 1
//     }
//     btn.addEventListener('click', () => {
//         if (localStorage.getItem("carrinho") == null) {
//             carrinho = [servico]
//             localStorage.setItem("carrinho", JSON.stringify(carrinho))
//             return
//         }
//         carrinho = JSON.parse(localStorage.getItem("carrinho"))
//         if (!carrinho.find(item => item.id == servico.id)) {
//             carrinho.push(servico)
//             localStorage.setItem("carrinho", JSON.stringify(carrinho))
//         } else {
//             carrinho.forEach(item => {
//                 if (item.id != servico.id) return
//                 item.quantidade++
//                 localStorage.setItem("carrinho", JSON.stringify(carrinho))
//             })

//         }
//     })

// })

