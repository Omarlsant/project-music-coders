function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
console.log(document);

const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const edad = document.querySelector('#edad');
const mensaje = document.querySelector('#mensaje');
const enviar = document.querySelector('#enviar');
const errores = document.querySelector('#errores');
let mensajesErrores = [];

// Funciones
function validar (evento) {
    // Evitar que se envie el formulario
    evento.preventDefault();

    // Vacia los mensajesErrores antes de rellenarlo nuevamente
    mensajesErrores = [];

    // VALIDACIONES

    // Nombre es obligatorio

    if (nombre.value.trim().length === 0) {
        mensajesErrores = mensajesErrores.concat('Nombre es un campo obligatorio');
    }
    

    // Nombre carácteres válidos

    if (!/^[a-zA-Z0-9]*$/.exec(nombre.value.trim())) {
        mensajesErrores = mensajesErrores.concat('Nombre no tiene carácteres válidos');
    }
    // Validar el correo electrónico
    if (correo.value.trim().length === 0) {
      mensajesErrores = mensajesErrores.concat('Correo es un campo obligatorio');}
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {
        mensajesErrores = mensajesErrores.concat('Correo no tiene un formato válido');
    }
    // Edad y telefono debe ser números

    if (isNaN(edad.value.trim())) {
        mensajesErrores = mensajesErrores.concat('La edad debe ser un número');
        
    }
    if (isNaN(telefono.value.trim())) {
      mensajesErrores = mensajesErrores.concat('El telefono debe ser un número');
  }

    // Comprobamos que el mensaje tiene un mínimo de 10 carácteres

    if (mensaje.value.trim().length < 10) {
        mensajesErrores = mensajesErrores.concat('Mensaje demasiado corto');
    }

    // ENVIAR O MOSTRAR MENSAJES
    if (mensajesErrores.length === 0) {
        // Enviamos el formulario si no hay errores
        formulario.submit();
    } else {
        // Muestro los errores
        errores.textContent = '';
        mensajesErrores.forEach(function (mensaje) {
            const miLi = document.createElement('li');
            miLi.textContent = mensaje;
            errores.appendChild(miLi);
        });
    }
}

// Eventos
formulario.addEventListener('submit', validar);