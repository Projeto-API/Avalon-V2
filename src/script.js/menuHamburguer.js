function abrirHamburguer() {

    let hamburger = document.getElementById("chaveHamburguer")
        if(hamburger.style.left =="-350px"){
            hamburger.style.left = "0px"
        } else {
            hamburger.style.left = "-350px";
        }
    }


    document.getElementById("chaveHamburguer")
    let navigation = document.querySelector("navigation")

    hamburger.onclick = () => {
        navigation.style.transform = "translateX(100)"
    }
