// Bucles

// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).


let numero = parseInt(prompt("Ingrese el número que desea obtener la tabla:"))

for (let i = 1; i <= 10; i++) {

    let resultado = numero * i

    console.table(numero + " x " + i + " = " + resultado)

}


// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

let numero = parseInt(prompt("Ingresa un número para acumular (y pulse 0 para terminar):"))

let suma = numero

while (numero != 0) {

    numero = parseInt(prompt("Ingresa un número para acumular (y pulse 0 para terminar):"))

    suma += numero
}

alert("La suma total es: " + suma)


// 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
// que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado.

let numeroSecreto = 40
let numeroIngresado = 0
let intentos = 0

do {
    numeroIngresado = parseInt(prompt("Ingrese un número del 1-100: "))

    if (numeroIngresado === numeroSecreto) {
        console.log("¡Felicitaciones! Has adivinado el número secreto")
        console.log("tu numero de intentos para lograrlo fue: " + intentos)
        break;
    } else if (numeroIngresado < numeroSecreto) {
        console.log("El número ingresado es menor al número secreto.")
    } else {
        console.log("El número ingresado es mayor al número secreto.")
    }
    intentos++

} while (numeroIngresado != numeroSecreto)


// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.


function esPrimo(numero) {

    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let numero = parseInt(prompt("Ingrese un número: "));

if (esPrimo(numero)) {
    console.log(numero, "es un número primo.");
} else {
    console.log(numero, "no es un número primo.");
}

// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

function mostrarDivisores(numero) {

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            console.log(i)
        }
    }

    console.log(numero)
}

let numero = parseInt(prompt("Ingrese un número: "))
console.log("Divisores de: " + numero)
mostrarDivisores(numero)


// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.


let frutas = ["Banano", "Pera", "Manzana", "Mandarina", "Naranja", "Coco", "Papaya", "Melon", "Sandia", "Lulo"];

for (let i = 0; i < frutas.length; i++) {
    console.log("Elemento " + (i + 1) + " " + frutas[i])
}


// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numero.length; i++) {
    let resultado = numero[i];

    let doble = resultado * 2

    console.log("El doble de " + numero[i] + " es = " + doble)

}

// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.

let familia = [
    { nombre: "Jennifer", apellido: "figueroa", edad: 42, parentesco: "Madre" },
    { nombre: "Valentina", apellido: "Lozano", edad: 22, parentesco: "Pareja" },
    { nombre: "Pedro", apellido: "Gonzalez", edad: 18, parentesco: "Hermano" },
    { nombre: "Jeymar", apellido: "Peraza", edad: 13, parentesco: "Hermana" },
    { nombre: "Genesis", apellido: "Figueroa", edad: 22, parentesco: "Hermana" }
]

for (let i = 0; i < familia.length; i++) {
    let miembro = familia[i];

    let nombreCompleto = (miembro.nombre + " " + miembro.apellido)

    console.log("hola soy " + nombreCompleto + " tengo " + miembro.edad + " y mi parentesto con Brayan es " + miembro.parentesco);

}


// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2) {
        console.log(numeros[i]);
    }
}


// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.

let sumaPares = 0
let sumaImpares = 0

let numeroIngresado

while (true) {
    numeroIngresado = parseInt(prompt("Ingrese un número para acumular (0 para finalizar): "))

    if (numeroIngresado === 0) {
        break;
    }

    if (numeroIngresado % 2 === 0) {
        sumaPares += numeroIngresado
    } else {
        sumaImpares += numeroIngresado
    }
}

console.log("La suma de los números pares es:" + sumaPares + " y de los impares es " + sumaImpares)


// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.

let numeros = [19, 39, 7, 82, 31, 16, 53, 8, 92, 65];

let numeroMasGrande = numeros[0];

for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i];
    }
}

console.log("El número más grande es: " + numeroMasGrande);


// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.


let numeros = [19, 39, 7, 82, 31, 16, 53, 8, 92, 65]

let numeroMasChico = numeros[0];

for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] < numeroMasChico) {
        numeroMasChico = numeros[i]
    }
}

console.log("El número más chico es: " + numeroMasChico)


// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.

function determinarGanador(jugador1, jugador2) {
    if (jugador1 === jugador2) {
        return "Empate"
    } else if ((jugador1 === 'piedra' && jugador2 === 'tijeras') ||
        (jugador1 === 'papel' && jugador2 === 'piedra') ||
        (jugador1 === 'tijeras' && jugador2 === 'papel')) {
        return true
    } else {
        return false
    }
}

let Jugador1 = prompt("Ingrese el nombre del Jugador 1:")
let Jugador2 = prompt("Ingrese el nombre del Jugador 2:")

let manoJugador1, manoJugador2, ganador

while (true) {
    manoJugador1 = prompt(Jugador1 + " elige: piedra, papel o tijeras")
    manoJugador2 = prompt(Jugador2 + " elige: piedra, papel o tijeras")

    ganador = determinarGanador(manoJugador1, manoJugador2)

    if (ganador === "Empate") {
        alert("Empate, ¡vuelvan a intentarlo!")
        console.log("Empate, ¡vuelvan a intentarlo!");

    } else if (ganador = true) {

        alert("El ganador es " + jugador1 + "!");
    } else (false){
        alert("El ganador es " + jugador2 + "!");
    }
}


// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

let asteriscos = " "

for (let i = 1; i <= 5; i++) {

    asteriscos += "  *"

    console.log(asteriscos)
}

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.

let asteriscos = [" * ", " * *", " * * *", " * * * * ", " * * * * *"]

for (let i = 4; i >= 0; i--) {

    console.log(asteriscos[i])
}

// 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
// pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)


let arrayDesordenado = [5, 2, 4, 1, 3, 9, 7, 8, 6, 10];

for (let i = 0; i < arrayDesordenado.length; i++) {

    for (let j = 0; j < arrayDesordenado.length; j++) {

        if (arrayDesordenado[j] > arrayDesordenado[j + 1]) {

            [arrayDesordenado[j], arrayDesordenado[j + 1]] = [arrayDesordenado[j + 1], arrayDesordenado[j]]
        }
    }
}

console.log("Array ordenado: " + arrayDesordenado)

