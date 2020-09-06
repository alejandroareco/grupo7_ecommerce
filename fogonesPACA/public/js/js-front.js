function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){
    let campoNombre = qs('input#nombre');
    let campoPrecio = qs('div#precio');
    let campoStock = qs('div#stock');
    let campoDetalles = qs('textarea#detalles');
    let errorNombre = qs('small#errorNombre')
    
  campoNombre.addEventListener('blur', function(){
      if(campoNombre.value.length == 0){
        errorNombre.innerText = 'El campo no puede estar vacío!'
      }
    });

  campoPrecio.addEventListener('click', function(event){
    alert('elemento seleccionado')
  });
    
  campoStock.addEventListener('click', function(event){
    alert('elemento seleccionado')
  });
  campoDetalles.addEventListener('click', function(event){
    alert('elemento seleccionado')
  });


/*
  form.addEventListener('submit', function (event) {
        // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
         if(!) {
          // Si no es así, mostramos un mensaje de error apropiado
          showError();
          // Luego evitamos que se envíe el formulario cancelando el evento
          event.preventDefault();
        }
      });
      */
})

