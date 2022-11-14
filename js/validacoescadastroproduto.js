window.addEventListener('load', function(){
    let formularioForm = document.querySelector('form.formulario');
    
    formularioForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    let formtitulo = document.getElementById('titulo');
    if(formtitulo.value == ''){
    alert('O campo não pode estar vazio')
    }else if (formtitulo.value.length < 3){
        alert('O tamanho precisa ser maior que 3')
    };
    let formpublic = document.getElementById('public');
    if(formpublic.value == ''){
        alert('O campo não pode estar vazio')
        }else if (formpublicac.value.length < 3){
            alert('O tamanho precisa ser maior que 3')
        };
        let formautordolivro = document.getElementById('autordolivro');
    if(formautordolivro.value == ''){
        alert('O campo não pode estar vazio')
        }else if (formautordolivro.value.length < 3){
            alert('O tamanho precisa ser maior que 3')
        };
    })
    })