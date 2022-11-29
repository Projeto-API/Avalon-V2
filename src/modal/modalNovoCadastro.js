
// -----------------------Modal - Cadastro Produtos -----------------------

function abrirModal() {
    document.getElementById('bg-modal').style.top ="0";
}
function fecharModal() {
    document.getElementById('bg-modal').style.top = "-150%";
}

// ---------------------------Verificação parte 01 ----------------------------

// function verificarFormulario(){
 
//     let formularioForm = document.querySelector('form.formulario')
//     formularioForm.addEventListener('submit', function(event){
        
        
//         let errorsMessages = [];
        
//         let tituloLivro = document.getElementById("tituloLivro");
//         if(tituloLivro.value == ''){
//             errorsMessages.push("O campo Livro não pode estar vazio")
            
//         } else if(tituloLivro.value.length < 3  ) {
//             errorsMessages.push("o tamanho do Titulo do livro tem de ser maior que 3")
//         }
        
//         let autor = document.getElementById("autor");
//         if(autor.value == ''){
//             errorsMessages.push("O campo Autor não pode estar vazio")
            
//         } else if(autor.value.length < 3  ) {
//             errorsMessages.push("o tamanho do Autor tem de ser maior que 3")
            
//         }
      
//         if (errorsMessages.length > 0){
//             event.preventDefault();

//             let divErrors = document.getElementById('div-errors');
//             divErrors.classList.remove('no-errors');
//             divErrors.classList.add('errors');
            
//             let ulErrors = document.querySelector('div.errors ul');
//             for (let i = 0; i < errorsMessages.length; i++) {
//                 ulErrors.innerHTML += '<li>' + errorsMessages[i] + '</li>'

//             }
//         }
//     })
//  }


