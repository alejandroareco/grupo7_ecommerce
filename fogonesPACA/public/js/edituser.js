function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){
    
    let campoNombres = qs('input#user');
    let campoApellido = qs('input#apellido');
    let campoMail = qs('input#mail');
    let campoDireccion = qs('input#direccion');
    let campoTelefono = qs('input#telefono');

    let errorNombre = qs('small#errorNombrew');
    let errorPrecio = qs('');
    let errorDetalles = qs('');
    let errores = {};
    
  campoNombres.addEventListener('blur', function(){
      if(campoNombres.value.length < 5){
        errorNombre.innerText = 'El campo debe tener al menos 5 caracteres!'
      }else errorNombre.innerHTML = '';
    });
     
})