function qs(elemento) {
  return document.querySelector(elemento);
}

window.addEventListener('load', function(){
  let campoNombre = qs('input#nombre');
  let campoPrecio = qs('input#precio');
  let campoDetalles = qs('textarea#detalles');
  let imagenes = qs('input#image')
  let formulario = qs('form');

  let errorNombre = qs('small#errorNombre');
  let errorPrecio = qs('small#errorPrecio');
  let errorDetalles = qs('small#detalles');
  let errorImagenes = qs('small#image')
  let regexFotos = /(.jpg|.jpeg|.png|.gif)$/i;
 

/*Errores individuales*/   
campoNombre.addEventListener('blur', function(){
  if(campoNombre.value.length < 5){
    errorNombre.innerText = 'El campo debe tener al menos 5 caracteres!'
   }else errorNombre.innerText = " "
})
campoPrecio.addEventListener('blur', function(){
  if(campoPrecio.value.length == 0){
    errorPrecio.innerText = 'Debe indicar un precio para este producto'
   }else errorNombre.innerText = " " 
})
campoDetalles.addEventListener('input', function(){
  if(campoDetalles.value.length < 20){
    errorDetalles.innerText = 'El campo debe tener al menos 20 caracteres!';
  }else errorDetalles.innerText = " ";
})

/*Todos los errores antes de enviar el form*/ 
formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  let errores = {};
  console.log(errores)
  if(campoNombre.value.length < 5){
    errores.nombre = 'El campo debe tener al menos 5 caracteres!'
   }

  if(campoPrecio.value.length == 0){
    errores.precio = 'Debe indicar un precio para este producto'
   }

  if(campoDetalles.value.length < 20){
   errores.detalles = 'El campo debe tener al menos 20 caracteres!';
   }
   if(imagenes.value){
    if (!regexFotos.exec(imagenes.value) || imagenes.value == null){
      errores.imagenes = "Debe subir imagenes en formato .jpg .jpeg .png .gif"
    }
  }

  if (Object.keys(errores).length != 0) {
    errorNombre.innerText = errores.nombre ? errores.nombre : "";
    errorPrecio.innerText = errores.precio ? errores.precio : "";
    errorDetalles.innerText = errores.detalles ? errores.detalles : "";
    errorImagenes.innerText = errores.imagenes ? errores.imagenes : ""; 
      
}else {
    formulario.submit();  
  } 
    });      
})