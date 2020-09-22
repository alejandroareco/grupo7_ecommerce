function getElementById(elemento){
    return document.getElementById(elemento);
}

window.addEventListener('load', function(){
    
    let campoNombres = getElementById('user');
    let campoApellido = getElementById('apellido');
    let campoMail = getElementById('mail');
    let campoDireccion = getElementById('direccion');
    let campoTelefono = getElementById('telefono');

    let errorNombre = getElementById('errorNombre');
    let errorApellido = getElementById('errorApellido');
    let errorMail = getElementById('errorMail')
    let errorDireccion = getElementById('errorDireccion');
    let errorTelefono = getElementById('errorTelefono');
    let errores = {};
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let letras = /[A-Za-z0-9]+/g;
   

  campoNombres.addEventListener("blur", () => {
          if (campoNombres.value.length < 2) {
              errorNombre.innerText = 'El campo debe tener al menos 2 caracteres!';
          }else
              errorNombre.innerHTML = '';
      });
      campoApellido.addEventListener("blur", () => {
        if (campoApellido.value.length < 2) {
            errorApellido.innerText = 'El campo debe tener al menos 2 caracteres!';
        }else
            errorApellido.innerHTML = '';
    });
    campoMail.addEventListener('blur', function(){
        if(emailRegex.test(campoMail.value)){
            errorMail.innerText = "";
        }else{
            errorMail.innerHTML = 'Ingrese un mail valido'
        }
    })
    campoDireccion.addEventListener('blur', function(){
        if(letras.test(campoDireccion.value)){
            errorDireccion.innerText = ""
        }else errorDireccion.innerHTML = 'Recordá poner calle y número';
    })
    
    campoTelefono.addEventListener('blur', function(){
        if(!isNaN(campoTelefono.value) && campoTelefono.value > 7){
            errorTelefono.innerText = ""
        }else errorTelefono.innerHTML = 'Ingresa un número valido';
        
    })

})