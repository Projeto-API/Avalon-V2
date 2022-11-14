window.addEventListener('load', function(){
    let formularioForm = document.querySelector('form.formulario');
    
    formularioForm.addEventListener('submit', function(event){
    event.preventDefault();
    let errorsMessages = [];
    
    let formtitulo = document.getElementById('titulo');
    if(formtitulo.value == ''){
    errorsMessages.push('O campo não pode estar vazio')
    }else if (formtitulo.value.length < 3){
        errorsMessages.push('O tamanho precisa ser maior que 3')
    };
    let formpublic = document.getElementById('public');
    if(formpublic.value == ''){
        errors.push('O campo não pode estar vazio')
        }else if (formpublicac.value.length < 3){
            errorsMessages.push('O tamanho precisa ser maior que 3')
        };
        let formautordolivro = document.getElementById('autordolivro');
    if(formautordolivro.value == ''){

        errorsMessages.push('O campo não pode estar vazio')
        }else if (formautordolivro.value.length < 3){
            errorsMessages.push('O tamanho precisa ser maior que 3')
        };
        let Messages = document.getElementById('message');
        if(Messages.value == ''){
            errorsMessages.push('O campo não pode estar vazio')
        }
        if(errorsMessages.leght > 0){
        event.preventDefault();
        }
        let ulErrors = document.querySelector('div.errors ul');
        for(let i = 0; i < errorsMessages.leght; i++){
ulErrors.innerHTML += '<li>' + '</li>'
        }
    })
    })


