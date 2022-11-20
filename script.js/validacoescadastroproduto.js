window.addEventListener('load', function(){
    let formularioForm = document.querySelector('form.formulario');
    
    formularioForm.addEventListener('submit', function(event){
        event.preventDefault()
 
    let formidioma = document.getElementById('idioma');
    if(formidioma.value.length < 5 ){
       
        document.querySelector('.err-length-idioma').classList.remove('invisible')
    }else{
        document.querySelector('.err-length-idioma').classList.add('invisible')
    }
    let formautor = document.getElementById('autor');
    if(formautor.value.length < 6 ){
       
        document.querySelector('.err-length-autor').classList.remove('invisible')
    }else{
        document.querySelector('.err-length-autor').classList.add('invisible')
    }
    let formdescricao = document.getElementById('descricao');
    if(formdescricao.value.length < 12 ){
       
        document.querySelector('.err-length-descricao').classList.remove('invisible')
    }else{
        document.querySelector('.err-length-descricao').classList.add('invisible')
    }
    let formpag = document.getElementById('pag');
    if(formpag.value.length < 1 ){
       
        document.querySelector('.err-length-pag').classList.remove('invisible')
    }else{
        document.querySelector('.err-length-pag').classList.add('invisible')
    }
    let formpreco = document.getElementById('preco');
    if(formpreco.value.length < 4 ){
       
        document.querySelector('.err-length-preco').classList.remove('invisible')
    }else{
        document.querySelector('.err-length-preco').classList.add('invisible')
    }
    let formacabamento = document.getElementById('acabamento');
    if(formacabamento.value.length < 3 ){
       
        document.querySelector('.err-length-acabamento').classList.remove('invisible')
    }else{
        document.querySelector('.err-length-acabamento').classList.add('invisible')
    }
    
    })
    })
    let inputs = document.querySelectorAll('form input')
    inputs.forEach(input =>{console.log("err-length-" + input.name)})

    function abrirModal() {
        document.getElementById('bg-modal').style.top ="0";
    }
    function fecharModal() {
        document.getElementById('bg-modal').style.top = "-150%";
<<<<<<< HEAD
    }
=======
    }
>>>>>>> 2316efe3a66965ab60c627a408d65e2cd9d3d655
