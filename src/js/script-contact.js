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

    // Vaciar los mensajesErrores antes de rellenarlo nuevamente
    mensajesErrores = [];

    // VALIDACIONES

    // Nombre es obligatorio
    if (nombre.value.trim().length === 0) {
        mensajesErrores.push('Nombre es un campo obligatorio');
    } else if (!/^[a-zA-Z\s]+$/.test(nombre.value.trim())) {
        mensajesErrores.push('Nombre no tiene carácteres válidos');
    } else if (nombre.value.trim().length < 2) {
        mensajesErrores.push('Nombre debe tener al menos 2 caracteres');
    }
    
    // Validar el correo electrónico
    if (correo.value.trim().length === 0) {
        mensajesErrores.push('Correo es un campo obligatorio');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {
        mensajesErrores.push('Correo no tiene un formato válido');
    }
    
    // Validar edad (debe ser un número)
    if (isNaN(edad.value.trim())) {
        mensajesErrores.push('La edad debe ser un número');
    }
    
    // Validar teléfono (debe ser un número)
    if (isNaN(telefono.value.trim())) {
        mensajesErrores.push('El teléfono debe ser un número');
    }

    // Comprobar que el mensaje tiene un mínimo de 10 caracteres
    if (mensaje.value.trim().length < 10) {
        mensajesErrores.push('Mensaje demasiado corto');
    }

    // ENVIAR O MOSTRAR MENSAJES
    if (mensajesErrores.length === 0) {
        // Mostrar mensaje de éxito usando SweetAlert2
        Swal.fire({
            title: "Mensaje enviado",
            text: "Nos pondremos en contacto contigo pronto.",
            icon: "success"
        }).then(() => {
            // Resetear el formulario después de mostrar el mensaje de éxito
            formulario.reset();
        });
    } else {
        // Mostrar los errores en una alerta usando SweetAlert2
        Swal.fire({
            icon: 'error',
            title: 'Errores de validación',
            html: mensajesErrores.join('<br>'),
            confirmButtonText: 'OK'
        });
    }
}

// Eventos
formulario.addEventListener('submit', validar);
