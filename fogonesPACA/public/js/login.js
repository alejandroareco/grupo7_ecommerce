function qs(elemento) {
    return document.querySelector(elemento);
  }

  window.addEventListener('load', function(){
    let formulario = qs('form#log')
    let campoMail = qs('input#mail');
    let campoPass = qs('input#pass');

    let errorMail = qs('small#errormail');
    let errorPass = qs('small#errorpass');

    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    /* Validacion de cada error individual */
    campoMail.addEventListener('input', function(){
        if(!campoMail.value.match(regExEmail)){
            errorMail.innerText = "Debe insertar un mail valido" 
        } else errorMail.innerText = '';
    })

    campoPass.addEventListener('input', function(){
        if(campoPass.value.length < 8){
            errorPass.innerText = "La contraseña debe tener al menos 8 caracteres"
        }else errorPass.innerText = " "
    })

    /*Validacion para evitar el envio del form con errores*/
    formulario.addEventListener('submit', function(event){
        event.preventDefault()
    let errores = {};
    
    if(!campoMail.value.match(regExEmail)){
        errores.mail = "Debe insertar un mail valido" 
    } 
    console.log(errores)
    console.log(campoMail.value)
    if(campoPass.value.length < 8){
        errores.pass = "La contraseña debe tener al menos 8 caracteres"
    }

    if (Object.keys(errores).length != 0) {
        errorMail.innerText = errores.mail ? errores.mail : "";
        errorPass.innerText = errores.pass ? errores.pass : "";
    } else {
        formulario.submit()
    }

    })
  })