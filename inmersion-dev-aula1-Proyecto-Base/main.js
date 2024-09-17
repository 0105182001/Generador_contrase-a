let cantidad = document.getElementById('cantidad'); 
let boton= document.getElementById('generar');
let contrasena= document.getElementById('contrasena');

const cadenaDeCaracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()abcdefghijklmnopqrstuvwxyz1234567890";

function generar(){
    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);
    if( numeroDigitado<8){
        alert("La cantidad de caracteres tiene que ser mayor que ocho ");
    }
    let password = "";
    for(let i =0; i<numeroDigitado;i++){
        let caracterAleatorio =cadenaDeCaracteres[Math.floor( Math.random() * cadenaDeCaracteres.length)];  
        console.log(caracterAleatorio); 
        password+=caracterAleatorio;
    }
    contrasena.value= password; 
    validarContrasena(password);
}

function limpiar(){
    document.getElementById('contrasena').value='';
}

function validarContrasena(contrasena) {
    const mensajeValidacion = document.getElementById("mensaje_validacion");

    const tieneNumero = /\d/;
    const tieneMayuscula = /[A-Z]/;
    const tieneMinuscula = /[a-z]/;
    
    let mensaje = "";

    if (!tieneMayuscula.test(contrasena)) {
        mensaje += "La contraseña debe contener al menos una letra mayúscula. ";
    }

    if (!tieneNumero.test(contrasena)) {
        mensaje += "La contraseña debe contener al menos un número. ";
    }

    if (mensaje === "") {
        mensaje = "Contraseña fuerte.";
        mensajeValidacion.style.color = "green"; 
    } else {
        mensajeValidacion.style.color = "red";  
    }

    mensajeValidacion.textContent = mensaje;
}






