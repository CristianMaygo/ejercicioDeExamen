function iniciarSesion() {
    const usuarioCorrecto = "admin";
    const contrasenaCorrecta = "1234";
    let intentos = 3;

    while (intentos > 0) {
        let usuario = prompt("Ingrese su usuario:");
        let contrasena = prompt("Ingrese su contraseña:");

        if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
            console.log("Inicio de sesión exitoso.");
            calcularConsumo();
            return;
        } else {
            intentos--;
            console.log(`Usuario o contraseña incorrectos. Intentos restantes: ${intentos}`);
        }
    }
    console.log("Se ha alcanzado el número máximo de intentos. El sistema se cerrará.");
}   

function calcularCosto(consumo) {
    if (consumo <= 15) {
        return consumo * 500;
    } else if (consumo <= 30) {
        return consumo * 700;
    } else {
        return consumo * 1000;
    }
}

