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



function calcularConsumo() {
    let totalConsumo = 0;
    let totalCosto = 0;

    while (true) {
        let consumo = prompt("Ingrese el consumo de agua del apartamento (o escriba 'fin' para terminar):");
        if (consumo.toLowerCase() === "fin") break;
        
        consumo = parseFloat(consumo);
        if (!isNaN(consumo) && consumo >= 0) {
            let costo = calcularCosto(consumo);
            totalConsumo += consumo;
            totalCosto += costo;
            console.log(`Consumo: ${consumo}m³, Costo: $${costo}`);
        } else {
            console.log("Por favor, ingrese un valor válido.");
        }
    }
    mostrarTotal(totalConsumo, totalCosto);
}

function mostrarTotal(totalConsumo, totalCosto) {
    console.log("Cálculo finalizado:");
    console.log(`Consumo total del edificio: ${totalConsumo}m³`);
    console.log(`Costo total mensual: $${totalCosto}`);
}

iniciarSesion();function calcularCosto(consumo) {
    if (consumo <= 15) {
        return consumo * 500;
    } else if (consumo <= 30) {
        return consumo * 700;
    } else {
        return consumo * 1000;
    }
}

function calcularConsumo() {
    let totalConsumo = 0;
    let totalCosto = 0;

    while (true) {
        let consumo = prompt("Ingrese el consumo de agua del apartamento (o escriba 'fin' para terminar):");
        if (consumo.toLowerCase() === "fin") break;
        
        consumo = parseFloat(consumo);
        if (!isNaN(consumo) && consumo >= 0) {
            let costo = calcularCosto(consumo);
            totalConsumo += consumo;
            totalCosto += costo;
            console.log(`Consumo: ${consumo}m³, Costo: $${costo}`);
        } else {
            console.log("Por favor, ingrese un valor válido.");
        }
    }
    mostrarTotal(totalConsumo, totalCosto);
}

