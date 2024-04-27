
// Exercies: 1

let numero1 = 20
let numero2 = 10

if (numero2 > numero2) {
    console.log("el primer numero es mayor")
} else {
    console.log("el segundo numero es menor")
}

// Exercies: 2

let numero1 = 20
let numero2 = 10

if (numero1 === numero2) {
    console.log("los numeros son iguales")
} else {
    console.log("los numeros no son iguales")
}

// Exercies: 3

let numero1 = 20
let numero2 = 10

if (numero1 > numero2) {
    console.log("el primer numero es mas grande")
} else if (numero1 === numero2) {
    console.log("ambos numeros son iguales")
}
else {
    console.log("el segundo numero es mas pequeño")
}

// Exercies: 4

let numero1 = 20;
let numero2 = 10;
let numero3 = 30;

if (numero1 < numero2 && numero1 < numero3) {
    console.log(numero1 + " es el número más pequeño.")
} else if (numero2 < numero1 && numero2 < numero3) {
    console.log(numero2 + " es el número más pequeño.")
} else {
    console.log(numero3 + " es el número más pequeño.")
}

// Exercies: 5

let persona1 = {
    nombre: "brayan",
    edad: 28,
    altura: 172
};

let persona2 = {
    nombre: "valentina ",
    edad: 22,
    altura: 168
};

if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es más alto que " + persona2.nombre)
} else if (persona1.altura < persona2.altura) {
    console.log(persona2.nombre + " es más alto que " + persona1.nombre)
} else {
    console.log("Ambas personas tienen la misma altura.");
}

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mayor que " + persona2.nombre)
} else if (persona1.edad < persona2.edad) {
    console.log(persona2.nombre + " es mayor que " + persona1.nombre)
} else {
    console.log("Ambas personas tienen la misma edad.")
}

// Exercies: 6

let nombre = prompt("Ingrese su nombre:")
let edad = parseInt(prompt("Ingrese su edad:"))
let altura = parseInt(prompt("Ingrese su altura:"))
let vision = parseFloat(prompt("Ingrese su  grado de visión:"))

if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(nombre + ", estás capacitado para conducir.")
} else {
    console.log(nombre + ", no cumples con los requisitos para conducir.")
}

// Exercies: 7

let miNombre = "brayan";

let nombre = prompt("Ingrese su nombre:")
let pase = prompt("Ingrese su tipo de pase (vip o normal): ")
let tieneEntrada = prompt("¿Posee entrada? (si o no?)")

if (nombre === miNombre || pase === "vip") {
    console.log("¡Bienvenido, " + nombre + ", a la fiesta!");
} else if (tieneEntrada === "si" || tieneEntrada === "s" || tieneEntrada === "true") {
    let utilizarEntrada = confirm("¿Desea utilizar su entrada?");
    if (utilizarEntrada == true) {
        console.log("¡Bienvenido, " + nombre + ", a la fiesta!");
    }
} else {
    let comprarEntrada = confirm("¿Desea comprar una entrada?");
    if (comprarEntrada == true) {
        let dineroDisponible = prompt("Cantidad de dinero disponible:");
        if (dineroDisponible >= 1000) {
            console.log("¡Venta de entrada exitosa! ¡Bienvenido/a, " + nombre + "!");
        } else {
            console.log("Lo sentimos, " + nombre + ", no tiene suficiente dinero para comprar una entrada.");
        }
    }
}


// Exercies: 8

let numeroIncognita = 4
let numeroIngresado = prompt("Ingrese un número comprendido entre 1 al 10")

if (numeroIncognita == numeroIngresado) {
    console.log("¡Ganaste, haz adivinado el número!")

} else if (numeroIngresado > numeroIncognita) {
    console.log("El número ingresado es mayor. Vuelve a intentarlo")
    numeroIngresado = prompt("El número ingresado es mayor. Vuelve a intentarlo")

    if (numeroIncognita == numeroIngresado) {
        console.log("¡Ganaste, haz adivinado el número!")

    } else if (numeroIngresado > numeroIncognita) {
        console.log("El número ingresado es mayor. Vuelve a intentarlo")
        numeroIngresado = prompt("El número ingresado es mayor. Vuelve a intentarlo")

        if (numeroIncognita == numeroIngresado) {
            console.log("¡Ganaste, haz adivinado el número!")

        } else {
            console.log("Se acabaron tus intentos. El número era " + numeroIncognita)
        }

    } else if (numeroIngresado < numeroIncognita) {
        console.log("El número ingresado es menor. Vuelve a intentarlo")
        numeroIngresado = prompt("El número ingresado es menor. Vuelve a intentarlo")

        if (numeroIncognita == numeroIngresado) {
            console.log("¡Ganaste, haz adivinado el número!")
        } else {
            console.log("Se acabaron tus intentos. El número era " + numeroIncognita)
        }
    }

} else if (numeroIngresado < numeroIncognita) {
    console.log("El número ingresado es menor. Vuelve a intentarlo")
    numeroIngresado = prompt("El número ingresado es menor. Vuelve a intentarlo")

    if (numeroIncognita == numeroIngresado) {
        console.log("¡Ganaste, haz adivinado el número!")
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El número ingresado es mayor. Vuelve a intentarlo")
        numeroIngresado = prompt("El número ingresado es mayor. Vuelve a intentarlo")

        if (numeroIncognita == numeroIngresado) {
            console.log("¡Ganaste, haz adivinado el número!")
        } else {
            console.log("Se acabaron tus intentos. El número era " + numeroIncognita)
        }
    } else if (numeroIngresado < numeroIncognita) {
        console.log("El número ingresado es menor. Vuelve a intentarlo")
        numeroIngresado = prompt("El número ingresado es menor. Vuelve a intentarlo")

        if (numeroIncognita == numeroIngresado) {
            console.log("¡Ganaste, haz adivinado el número!")
        } else {
            console.log("Se acabaron tus intentos. El número era " + numeroIncognita)
        }
    }
}


// Exercies: 9

let edad = parseInt(prompt("Ingrese su edad:"))

if (edad >= 0 && edad <= 12) {
    console.log("Eres un infante.")
} else if (edad >= 13 && edad <= 18) {
    console.log("Eres un adolescente.")
} else if (edad >= 19 && edad <= 45) {
    console.log("Eres un mayor joven.")
} else if (edad > 45 && edad <= 100) {
    console.log("Eres un anciano.")
} else if (edad > 100) {
    let confirmacion = confirm("¿En realidad tienes más de 100 años?");
    if (confirmacion) {
        console.log("Wow, eres una persona muy mayor!")
    } else {
        console.log("¿Estás seguro de haber ingresado tu edad correctamente?")
    }
}

// Exercies: 10

let jugador1 = prompt("Jugador 1: Ingrese PIEDRA, PAPEL o TIJERAS").toUpperCase().trim();
let jugador2 = prompt("Jugador 2: Ingrese PIEDRA, PAPEL o TIJERAS").toUpperCase().trim();

if (jugador1 === jugador2) {
    console.log("¡Empate!")
} else if ((jugador1 === "PIEDRA" && jugador2 === "TIJERAS") || (jugador1 === "PAPEL" && jugador2 === "PIEDRA") || (jugador1 === "TIJERAS" && jugador2 === "PAPEL")) {
    console.log("¡Jugador 1 gana!")
} else if ((jugador2 === "PIEDRA" && jugador1 === "TIJERAS") || (jugador2 === "PAPEL" && jugador1 === "PIEDRA") || (jugador2 === "TIJERAS" && jugador1 === "PAPEL")) {
    console.log("¡Jugador 2 gana!")
} else {
    console.log("¡Uno de los jugadores ha hecho trampa!")
}

// Exercies: 11

let color = prompt("Ingrese un color:").toLowerCase();

switch (color) {
    case "blanco":
    case "negro":
        console.log("Falta de color.");
        break;
    case "verde":
        console.log("El color de la naturaleza.");
        break;
    case "azul":
        console.log("El color del agua.");
        break;
    case "amarillo":
        console.log("El color del sol.");
        break;
    case "rojo":
        console.log("El color del fuego.");
        break;
    case "marrón":
    case "marron":
        console.log("El color de la tierra.");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado.");
}

// Exercies: 12

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese la operación (+, -, *, /): ").toLowerCase();

if (operacion === "+") {
    console.log("El resultado de la suma es:", num1 + num2);
} else if (operacion === "-") {
    console.log("El resultado de la resta es:", num1 - num2);
} else if (operacion === "*") {
    console.log("El resultado de la multiplicacion es:", num1 * num2);
} else if (operacion === "/") {
    if (num2 !== 0) {
        console.log("El resultado de la division es:", num1 / num2);
    } else {
        console.log("Error: El divisor no puede ser cero.");
    }
} else {
    console.log("Operación no válida.");
}

// Exercies: 13

let nombre = prompt("Ingrese su nombre:")
let apellido = prompt("Ingrese su apellido:")
let dniNumero = prompt("Ingrese su número de DNI:")
let dniFechaNacimiento = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA):")

console.log("Nombre: " + nombre)
console.log("Apellido: " + apellido)
console.log("Número de DNI: " + dniNumero)
console.log("Fecha de nacimiento: " + dniFechaNacimiento)

let confirmacion = confirm("¿Están correctos estos datos?")

if (confirmacion) {
    let dni = {
        nombre: nombre,
        apellido: apellido,
        numero: dniNumero,
        fechaNacimiento: dniFechaNacimiento,
    }
    console.log("Registro exitoso.")
    alert("Registro exitoso. Para el dni n° " + dniNumero)
    console.table(dni)
} else {
    console.log("Vuelva a intentarlo en 1 mes.")
}