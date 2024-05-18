// Block de notas

// creo el array vacio y dos notas de ejemplo para guiarme y el id global para que sea unica cada tarjeta

let notas = []

notas.push({ id: 1, titulo: "Nota 1", texto: "Contenido de la nota 1", realizada: false })
notas.push({ id: 2, titulo: "Nota 2", texto: "Contenido de la nota 2", realizada: true })

let idGlobal = 2

// obtengo las varibles de lo diferentes elementos del html

let titulo = document.getElementById("inputTitulo")
let texto = document.getElementById("inputTexto")
let contenedorNotas = document.getElementById("container")

let guardarNotaNueva = document.getElementById("guardar")
guardarNotaNueva.addEventListener("click", () => {
  crearNota(titulo, texto)
})

///////////////////////////// FUNCIONES

function limpiarCampos() {
  titulo.value = ""
  texto.value = ""
}

////////////////////////////////////////////

function crearNota(titulo, texto) {
  let tituloValor = titulo.value.trim()
  let textoValor = texto.value.trim()

  if (tituloValor == "" || textoValor == "") {
    alert("Por favor, complete todos los campos antes de guardar.")
    return
  }

  idGlobal++

  let nota = {
    id: idGlobal,
    titulo: tituloValor,
    texto: textoValor,
    realizada: false
  }

  notas.push(nota)

  pintarNotas()
  limpiarCampos()
}

////////////////////////////////////////////

function pintarNotas() {
  contenedorNotas.innerHTML = ""

  if (notas.length === 0) {
    contenedorNotas.innerHTML = `<div class="w-100 text-center fs-3">NO HAY NOTAS PARA MOSTRAR</div>`
  } else {
    for (let i = 0; i < notas.length; i++) {
      let nota = notas[i]
      let tarjetaNota = document.createElement("div")
      tarjetaNota.classList.add("card", "border-dark", "mb-3")
      tarjetaNota.style.maxWidth = "18rem"
      tarjetaNota.innerHTML = `
      <div class="card-header">
    <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>${nota.titulo}</div>
        <div class="card-body d-flex flex-column justify-content-between">
          <p class="card-text ${nota.realizada ? "text-decoration-line-through" : ""}">${nota.texto}</p>
          <button type="button" class="btn btn-danger" onclick="borrarNota(${nota.id})">Borrar Nota</button>
        </div>
      `
      contenedorNotas.appendChild(tarjetaNota)
    }
  }
}

pintarNotas(notas)

////////////////////////////////////////////

function borrarNota(idNota) {

  notas = notas.filter(nota => nota.id !== idNota)

  pintarNotas()
}

////////////////////////////////////////////

function marcarRealizada(idNota) {
 
  let nota = notas.find(nota => nota.id === idNota)
  if (nota) {
    nota.realizada = !nota.realizada 
  }

  pintarNotas()
}

//////////////////////////////////////////// FILTRADO

document.querySelector(".form-control.me-2").addEventListener("input", filtrarNotas)
document.getElementById("flexSwitchCheckDefault").addEventListener("change", filtrarNotas)

function filtrarNotas() {
  let textoBusqueda = document.querySelector(".form-control.me-2").value.toLowerCase()
  let soloTareasRealizadas = document.getElementById("flexSwitchCheckDefault").checked
  let tarjetas = document.querySelectorAll(".card")

   // aca revisamos que el texto buscado este en la tarjeta: titulo, contenido o realizada
  tarjetas.forEach(function (tarjeta) {
    let titulo = tarjeta.querySelector(".card-header").textContent.toLowerCase()
    let contenido = tarjeta.querySelector(".card-text").textContent.toLowerCase()
    let realizada = tarjeta.querySelector("input[type=\"checkbox\"]").checked;

     //con condicionales, se muestran las que tengan el texto buscado y las que no se ocultan
    if (
      (titulo.includes(textoBusqueda) || contenido.includes(textoBusqueda)) &&
      (!soloTareasRealizadas || realizada)
    ) {
      tarjeta.style.display = ""
    } else {
      tarjeta.style.display = "none"
    }
  });
}

