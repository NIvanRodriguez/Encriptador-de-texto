// Función para encriptar el mensaje
function encriptar(mensaje, desplazamiento) {
    let resultado = '';
    for (let i = 0; i < mensaje.length; i++) {
        let caracter = mensaje[i];
        
        // Verificar si el carácter es una letra minúscula
        if (caracter >= 'a' && caracter <= 'z') {
            resultado += String.fromCharCode(((caracter.charCodeAt(0) - 97 + desplazamiento) % 26 + 26) % 26 + 97);
        }
        // Si no es una letra, agregarlo directamente al resultado
        else {
            resultado += caracter;
        }
    }
    return resultado;
}

// Función para desencriptar el mensaje
function desencriptar(mensaje, desplazamiento) {
    return encriptar(mensaje,-desplazamiento);
}

// Función para manejar el botón de encriptar
function encriptarMensaje() {
    let mensaje = document.getElementById('mensaje').value;
    let desplazamiento = 3; 
    let resultado = encriptar(mensaje, desplazamiento);
    document.getElementById('resultado').innerText = resultado;
}

// Función para manejar el botón de desencriptar
function desencriptarMensaje() {
    let mensaje = document.getElementById('mensaje').value;
    let desplazamiento = 3;  
    let resultado = desencriptar(mensaje, desplazamiento);
    document.getElementById('resultado').innerText = resultado;
}
