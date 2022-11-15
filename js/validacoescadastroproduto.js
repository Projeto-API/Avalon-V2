window.addEventListener('load', function(){
    let formularioForm = document.querySelector('form.formulario');
    
    formularioForm.addEventListener('submit', function(event){

 
    let formpublic = document.getElementById('public');
    if(formpublic.value.length < 10 ){
        event.preventDefault()
        document.querySelector('.err-length-public').classList.remove('invisible')
    }else{
        document.querySelector('.err-length-public').classList.add('invisible')
    }
    })
    })
    let inputs = document.querySelectorAll('form input')
    inputs.forEach(input =>{console.log("err-length-" + input.name)})


