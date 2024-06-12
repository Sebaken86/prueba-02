const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Alerta tu mensaje', 'success')
  })
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

/* Función para asignar ruta de imagen */

document.getElementById('SubirLaImagen').addEventListener('click', function(){
  let inputImagen = document.getElementById('fotoDatos').value
  let datoImagen = document.getElementById('botonModal').setAttribute('data-img',inputImagen)
  
});

const miVentanaEmergente = document.getElementById('ventanaEmergente');

miVentanaEmergente.addEventListener('show.bs.modal', function(event){
  
  let boton = event.relatedTarget
  let datoImagen = boton.getAttribute('data-img')
  let mensaje = boton.getAttribute('data-titulo')
  let contenido = boton.getAttribute('data-contenido')

  document.getElementById('tituloModal').innerText = mensaje
  
  if(datoImagen == ''){
    document.querySelector('.modal-body').innerHTML = contenido
  }else {
    document.querySelector('.modal-body').innerHTML = '<img class="img-fluid" src="' + datoImagen + '" alt="' + contenido + '">'
  }

})
