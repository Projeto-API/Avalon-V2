
function abrirModal() {
    document.getElementById('bg-modal').style.top ="0";
}
function fecharModal() {
    document.getElementById('bg-modal').style.top = "-150%";
}



function verificarFormulario(){
 
    let formularioForm = document.querySelector('form.formulario')
    formularioForm.addEventListener('submit', function(enviarDados){

        let tituloLivro = document.getElementById("tituloLivro");
      
        if(tituloLivro.value = " "){
            alert("O campo Livro não pode estar vazio")
            
        } else{
            alert("ok salvo")
            enviarDados.preventDefault();
        }
        let autor = document.getElementById("autor");
      
        if(autor.value = " "){
            alert("O campo Autor não pode estar vazio")
            
        } else{
            alert("ok salvo")
            enviarDados.preventDefault();
        }

}
)}


    
    
// })


// })