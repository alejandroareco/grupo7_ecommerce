//Swal.fire(
//    'ATENCION',
//    'El uso de los fogones puede causar daños. Utilizar con precaución.',
//    'warning'
//  )

Swal.fire({
  icon: 'warning',
  title: 'ATENCION',
  text: 'El uso de los fogones puede causar daños. Utilizar con precaución.',
  footer: '<a href=http://localhost:4000/productos/instructivo> Instructivo de Uso</a>',
  html:
  '<b>El uso de los fogones puede causar daños. Utilizar con precaución.</b>'
})