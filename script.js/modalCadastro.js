function abrirUsuario() {
    document.getElementById('bg-usuario').style.top ="0";
}
function fecharUsuario() {
    document.getElementById('bg-usuario').style.top = "-150%";
}



function verificarFormulario(){
 
    let formularioForm = document.querySelector('form.formulario')
    formularioForm.addEventListener('submit', function(event){
        
        
        let errorsMessages = [];
        
        let tituloLivro = document.getElementById("tituloLivro");
        if(tituloLivro.value == ''){
            errorsMessages.push("O campo Livro não pode estar vazio")
            
        } else if(tituloLivro.value.length < 3  ) {
            errorsMessages.push("o tamanho do Titulo do livro tem de ser maior que 3")
        }
        
        let autor = document.getElementById("autor");
        if(autor.value == ''){
            errorsMessages.push("O campo Autor não pode estar vazio")
            
        } else if(autor.value.length < 3  ) {
            errorsMessages.push("o tamanho do Autor tem de ser maior que 3")
            
        }
      
        if (errorsMessages.length > 0){
            event.preventDefault();

            let divErrors = document.getElementById('div-errors');
            divErrors.classList.remove('no-errors');
            divErrors.classList.add('errors');
            
            let ulErrors = document.querySelector('div.errors ul');
            for (let i = 0; i < errorsMessages.length; i++) {
                ulErrors.innerHTML += '<li>' + errorsMessages[i] + '</li>'

            }
        }
    })
 }


 function abrirHamburguer() {

    let hamburger = document.getElementById("chave-hamburguer")
        if(hamburger.style.left =="-350px"){
            hamburger.style.left = "0px"
        } else {
            hamburger.style.left = "-350px";
        }
    }
