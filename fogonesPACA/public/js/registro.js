function qs(elemento) {
    return document.querySelector(elemento);
  }

window.addEventListener('load', function(){
let formulario = qs('form');
let nombre = qs('input#nombre');
let apellido = qs('input#apellido');
let mail = qs('input#mail');
let pass = qs('input#pass');
let img = qs('input#img');


let errorNombre = qs('small#name');
let errorApellido = qs('small#apell');
let errorMail = qs('small#errorMail');
let errorPass = qs('small#errorPass');
let errorImg = qs('small#errorImg');

let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let regExImg = /(.jpg|.jpeg|.png|.gif)$/i;

/*Errores individuales */
nombre.addEventListener('input', function(){
    if(nombre.value.length < 3){
        errorNombre.innerText = "El nombre tiene que tener al menos 2 caracteres"
    }else errorNombre.innerText = " "
});
apellido.addEventListener('input', function(){
    if(apellido.value.length < 3){
        errorApellido.innerText = "El apellido tiene que tener al menos 2 caracteres"
    }else errorApellido.innerText = " "
});
mail.addEventListener('input', function(){
    if(!mail.value.match(regExEmail)){
        errorMail.innerText = "Ingresa un mail valido"
    }else errorMail.innerText = " "
});
pass.addEventListener('input', function(){
    if(pass.value.length < 8){
        errorPass.innerText = "La contraseña debe tener al menos 8 caracteres"
    }else errorPass.innerText = " "  
});
img.addEventListener('input', function(){
    if (img.value) {
        if (!regExImg.exec(img.value)) {
           errorImg.innerText = "Debe subir imagenes en formato .jpg .jpeg .png .gif"
        }
    }else errorImg.innerText = " "
});

/*Todos los errores antes de enviar el form*/ 
    formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    let errores = {};
    if(nombre.value.length < 3){
        errores.nombre = "El nombre tiene que tener al menos 2 caracteres"
    }
    if(apellido.value.length < 3){
        errores.apellido = "El apellido tiene que tener al menos 2 caracteres"
    }
    if(!mail.value.match(regExEmail)){
        errores.mail = "Ingresa un mail valido"
    }
    if(pass.value.length < 8){
        errores.pass = "La contraseña debe tener al menos 8 caracteres"
    }
    if (img.value) {
        if (!regExImg.exec(img.value)) {
            errores.img = "Debe subir imagenes en formato .jpg .jpeg .png .gif"
        }
    }
    if (Object.keys(errores).length != 0) {
        errorNombre.innerText = errores.nombre ? errores.nombre : "";
        errorApellido.innerText = errores.apellido ? errores.apellido : "";
        errorMail.innerText = errores.mail ? errores.mail : "";
        errorPass.innerText = errores.pass ? errores.pass : "";
        errorImg.innerText = errores.img ? errores.img : "";
    } else {
        formulario.submit()
    }

    })
})