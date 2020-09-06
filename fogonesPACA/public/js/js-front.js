function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){
    let campoNombre = qs('input#nombre');
    let campoPrecio = qs('input#precio');
    let campoDetalles = qs('textarea#detalles');
    let formulario = qs('form');

    let errorNombre = qs('small#errorNombre');
    let errorPrecio = qs('small#errorPrecio');
    let errorDetalles = qs('small#detalles');
    let errores = {};
    
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

  campoDetalles.addEventListener('input', function(event){
    if(campoDetalles.value.length < 20){
      qs('small#detalles').innerText = 'El campo debe tener al menos 20 caracteres!';
      console.log(errores)
    }else errorDetalles.innerHTML = '';

    
  });

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if(0){ /*CONDICION DE ERRORES*/
      alert('Hay errores en el formulario de carga del producto')
      /*showError();*/
    }else {
      formulario.submit();
      
    } 
      });      
})

