window.addEventListener('load', function(){
    let formularioForm = document.querySelector('form.formulario');
    
    formularioForm.addEventListener('submit', function(event){
        event.preventDefault()
 
    let formpass = document.getElementById('pass');
    if(formpass.value.length > 11 ){
       
        document.querySelector('.err-length-pass').classList.remove('invisible')
    }else{
        document.querySelector('.err-length-pass').classList.add('invisible')
    }
    
    let formemail = document.getElementById('email');
    if(formemail.value.length < 10 ){
       
        document.querySelector('.err-length-email').classList.remove('invisible')
    }else{
        document.querySelector('.err-length-email').classList.add('invisible')
    }
    let formtel = document.getElementById('tel');
    if(formtel.value.length < 9 ){
       
        document.querySelector('.err-length-tel').classList.remove('invisible')
    }else{
        document.querySelector('.err-length-tel').classList.add('invisible')
    }
    
    })
    })
    let inputs = document.querySelectorAll('form input')
    inputs.forEach(input =>{console.log("err-length-" + input.name)})