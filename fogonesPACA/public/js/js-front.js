function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){
    let campoNombre = qs('input#nombre');
    let campoPrecio = qs('input#precio');
    let campoStock = qs('div#stock');
    let campoDetalles = qs('textarea#detalles');
    let boton = qs('button#botonMobile');

    let errorNombre = qs('small#errorNombre');
    let errorPrecio = qs('small#errorPrecio');
    let errorDetalles = qs('small#detalles');
    
  campoNombre.addEventListener('blur', function(){
      if(campoNombre.value.length < 5){
        errorNombre.innerText = 'El campo debe tener al menos 5 caracteres!'
      }else errorNombre.innerHTML = '';
    });

  campoPrecio.addEventListener('blur', function(event){
    if(campoPrecio.value.length == 0){
      errorPrecio.innerText = 'Debe indicar un precio para este producto'
    }else errorPrecio.innerHTML = '';
  });
    
  campoStock.addEventListener('click', function(event){
    
  });

  campoDetalles.addEventListener('blur', function(event){
    if(campoDetalles.value.length < 20){
      qs('small#detalles').innerText = 'El campo debe tener al menos 20 caracteres!'
    }else errorDetalles.innerHTML = '';
  });


/*
  boton.addEventListener('submit', function (event) {
        // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
         if(true) {
          // Si no es así, mostramos un mensaje de error apropiado
          showError(errorDetalles + errorPrecio + errorNombre);
          // Luego evitamos que se envíe el formulario cancelando el evento
          event.preventDefault();
        }
      });      */
})

