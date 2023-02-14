const btnsAdd = document.querySelectorAll('.comprar')

btnsAdd.forEach((btn, i) => {
    // const c = document.getElementById
    const containerServico = c(".cart-carrinho + i)
    // const imagemServico = containerServico.querySelector('.galeria img').src = imagem.img;
    // const nomeServico = containerServico.children[1].children[0].innerText
    // const valorServico = containerServico.children[1].children[1].innerText
    // const descricaoServico = containerServico.children[1].children[2].innerText
    // const idServico = containerServico.children[1].children[3].value
    let carrinho = []

    const servico = {
        id: idServico,
        nome: nomeServico,
        valor: valorServico,
        descricao: descricaoServico,
        imagem: imagemServico,
        quantidade: 1
    }
    btn.addEventListener('click', () => {
        if (localStorage.getItem("carrinho") == null) {
            carrinho = [servico]
            localStorage.setItem("carrinho", JSON.stringify(carrinho))
            return
        }
        carrinho = JSON.parse(localStorage.getItem("carrinho"))
        if (!carrinho.find(item => item.id == servico.id)) {
            carrinho.push(servico)
            localStorage.setItem("carrinho", JSON.stringify(carrinho))
        } else {
            carrinho.forEach(item => {
                if (item.id != servico.id) return
                item.quantidade++
                localStorage.setItem("carrinho", JSON.stringify(carrinho))
            })

        }
    })

})