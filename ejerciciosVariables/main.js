//Exercies: 1

let miNombre = "Brayan"

//Exercies: 2

let miApellido = "Flores"

console.log(miNombre)
console.log(miApellido);
//Exercies: 3

let miEdad = 28

//Exercies: 4

let miMascota = "Lola"

//Exercies: 5

let edadMascota = 3

//Exercies: 6

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

//Exercies: 7

let nombreCompleto = miNombre + " " + miApellido

//Exercies: 8

let textoPresentacion = "hola mi nombre es " + nombreCompleto + " mi edad es " + miEdad + " mi mascota se llama " + miMascota + " y su edad es " + edadMascota

//Exercies: 9

let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

//Exercies: 10

miNombre = prompt("Ingresar Nombre")
miApellido = prompt("Ingresar Apellido")
miEdad = prompt("Ingrese su Edad")
miMascota = prompt("Nombre de su mascota")
edadMascota = prompt("Edad de su mascota")

console.log(nombreCompleto)

console.log(textoPresentacion)

console.log(sumaEdades)

console.log(restaEdades)

console.log(productoEdades)

console.log(divisionEdades)

//Exercies: 11 

let alumno = {
    nombre: miNombre,
    apellido: miApellido,
    edad: miEdad,
    ojos: "marrones",
    cabello: "negro"
}

console.table(alumno)

console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.ojos)
console.log(alumno.cabello)

//Exercies: 12

let mascota = {
    nombre: miMascota,
    edad: edadMascota,
    color: "negro",
    genero: "hembra",
    tamaño: "mediano"
}

console.table(mascota)

console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.color)
console.log(mascota.genero)
console.log(mascota.tamaño)


//Exercies: 13

let frutas =  ["banano","papaya","sandia","mango","melon"]

console.log(frutas)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//Exercies: 14


let numeros = [10,20,30,40,50]

console.log(numeros)

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//Exercies: 15

let familia = [

    {
        nombre: "Jennifer",
        edad: "42",
        parentesco: "mama",
    },
    {
        nombre: "juan carlos",
        edad: "45",
        parentesco: "papa",
    },
    {
        nombre: "jeymar",
        edad: "13",
        parentesco: "hermana",
    },
    {
        nombre: "genesis",
        edad: "21",
        parentesco: "hermana",
    },
    {
        nombre: "pedro",
        edad: "18",
        parentesco: "hermano",
    }
]

console.log(familia)

console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

//Exercies: 16

let textoAleatorio = frutas[1] +" "+ numeros[3] +" "+ familia[4].nombre

console.log(textoAleatorio)

//Exercies: 17

let edadCompañero = parseInt(prompt("Edad de su compañero"))


let edadesIguales = miEdad === edadCompañero

let soyMayor = miEdad > edadCompañero

let soyMenor = miEdad < edadCompañero

console.log("Tenemos edades iguales: " + edadesIguales)
console.log("Soy mayor que mi compañero " + soyMayor)
console.log("Soy menor que mi compañero " + soyMenor)

//Exercies: 18

let soyMayorDeEdad = miEdad >= 18

console.log("Soy mayor de edad " + soyMayorDeEdad )

//Exercies: 19

let edadCliente = parseInt(prompt("Introduzca su edad"))

let alturaCliente = parseInt(prompt("Introduzca su altura"))

let puedeSubir = edadCliente >= 6 && alturaCliente >= 120

console.log("Puede subir a la atracción " + puedeSubir)

//Exercies: 20

let pasePersona = prompt("Introduzca su tipo de pase")

let saldoDisponible = parseInt( prompt("Introduzca su saldo"))

let puedePasar = pasePersona === "VIP" ||  saldoDisponible >= 1000

console.log("La persona puede pasar:", puedePasar)
