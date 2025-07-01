// Obtener referencias a los elementos del DOM
const form = document.getElementById('registroForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const edadInput = document.getElementById('edad');
const enviarBtn = document.getElementById('enviarBtn');
const reiniciarBtn = document.getElementById('reiniciarBtn');

// Expresiones regulares para validación
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

// Objeto para rastrear el estado de validación de cada campo
const validationState = {
    nombre: false,
    email: false,
    password: false,
    confirmPassword: false,
    edad: false
};

// Función para mostrar mensajes de error
function mostrarError(campo, mensaje) {
    const errorElement = document.getElementById(`error-${campo}`);
    errorElement.textContent = mensaje;
    document.getElementById(campo).classList.add('invalido');
    document.getElementById(campo).classList.remove('valido');
    validationState[campo] = false;
}

// Función para mostrar campo válido
function mostrarValido(campo) {
    const errorElement = document.getElementById(`error-${campo}`);
    errorElement.textContent = '';
    document.getElementById(campo).classList.add('valido');
    document.getElementById(campo).classList.remove('invalido');
    validationState[campo] = true;
}

// Función para verificar si todos los campos son válidos
function verificarFormularioValido() {
    const todosValidos = Object.values(validationState).every(estado => estado === true);
    enviarBtn.disabled = !todosValidos;
}

// Validación del nombre
function validarNombre() {
    const nombre = nombreInput.value.trim();
    
    if (nombre.length === 0) {
        mostrarError('nombre', 'El nombre es obligatorio');
    } else if (nombre.length < 3) {
        mostrarError('nombre', 'El nombre debe tener al menos 3 caracteres');
    } else {
        mostrarValido('nombre');
    }
    
    verificarFormularioValido();
}

// Validación del email
function validarEmail() {
    const email = emailInput.value.trim();
    
    if (email.length === 0) {
        mostrarError('email', 'El correo electrónico es obligatorio');
    } else if (!emailRegex.test(email)) {
        mostrarError('email', 'Formato de correo electrónico inválido');
    } else {
        mostrarValido('email');
    }
    
    verificarFormularioValido();
}

// Validación de la contraseña
function validarPassword() {
    const password = passwordInput.value;
    
    if (password.length === 0) {
        mostrarError('password', 'La contraseña es obligatoria');
    } else if (password.length < 8) {
        mostrarError('password', 'La contraseña debe tener al menos 8 caracteres');
    } else if (!passwordRegex.test(password)) {
        mostrarError('password', 'La contraseña debe tener al menos un número y un carácter especial');
    } else {
        mostrarValido('password');
    }
    
    // Re-validar confirmación de contraseña si ya tiene contenido
    if (confirmPasswordInput.value.length > 0) {
        validarConfirmPassword();
    }
    
    verificarFormularioValido();
}

// Validación de confirmación de contraseña
function validarConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    if (confirmPassword.length === 0) {
        mostrarError('confirmPassword', 'Debe confirmar la contraseña');
    } else if (password !== confirmPassword) {
        mostrarError('confirmPassword', 'Las contraseñas no coinciden');
    } else {
        mostrarValido('confirmPassword');
    }
    
    verificarFormularioValido();
}

// Validación de la edad
function validarEdad() {
    const edad = parseInt(edadInput.value);
    
    if (isNaN(edad) || edadInput.value.trim() === '') {
        mostrarError('edad', 'La edad es obligatoria');
    } else if (edad < 18) {
        mostrarError('edad', 'Debe ser mayor de 18 años');
    } else if (edad > 120) {
        mostrarError('edad', 'Edad no válida');
    } else {
        mostrarValido('edad');
    }
    
    verificarFormularioValido();
}

// Event listeners para validación en tiempo real
nombreInput.addEventListener('input', validarNombre);
nombreInput.addEventListener('blur', validarNombre);

emailInput.addEventListener('input', validarEmail);
emailInput.addEventListener('blur', validarEmail);

passwordInput.addEventListener('input', validarPassword);
passwordInput.addEventListener('blur', validarPassword);

confirmPasswordInput.addEventListener('input', validarConfirmPassword);
confirmPasswordInput.addEventListener('blur', validarConfirmPassword);

edadInput.addEventListener('input', validarEdad);
edadInput.addEventListener('blur', validarEdad);

// Manejo del envío del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar todos los campos una vez más
    validarNombre();
    validarEmail();
    validarPassword();
    validarConfirmPassword();
    validarEdad();
    
    // Verificar si todos los campos son válidos
    if (Object.values(validationState).every(estado => estado === true)) {
        alert('¡Formulario enviado exitosamente! Todos los campos son válidos.');
        // Aquí podrías enviar los datos a un servidor
        console.log('Datos del formulario:', {
            nombre: nombreInput.value,
            email: emailInput.value,
            edad: edadInput.value
        });
    } else {
        alert('Por favor, corrija los errores en el formulario antes de enviarlo.');
    }
});

// Manejo del botón reiniciar
reiniciarBtn.addEventListener('click', function() {
    // Limpiar el formulario
    form.reset();
    
    // Limpiar clases de validación
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('valido', 'invalido');
    });
    
    // Limpiar mensajes de error
    const errorMessages = form.querySelectorAll('.error-mensaje');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
    
    // Reiniciar estado de validación
    Object.keys(validationState).forEach(key => {
        validationState[key] = false;
    });
    
    // Deshabilitar botón de envío
    enviarBtn.disabled = true;
});
