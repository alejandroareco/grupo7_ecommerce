function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){  
let borrar = qs('form');

borrar.addEventListener('submit', function(event){
let resp = confirm('¿Seguro que quieres eliminar este producto? Esta acción no se puede revertir');
if(resp){
    
}else{ 
    event.preventDefault();
}
})

})
