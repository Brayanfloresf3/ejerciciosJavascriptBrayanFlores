// calcular IMC

calcular.addEventListener("click", function () {
  let estatura = parseFloat(document.getElementById("estatura").value) / 100
  let peso = parseFloat(document.getElementById("peso").value)

  let imc = peso / (estatura * estatura)

  document.getElementById("resultado").value = imc.toFixed(2)

})

// conversor de moneda

let pesosInput = document.getElementById("pesos")
let dollarInput = document.getElementById("dolar")

pesos.addEventListener("input", function () {
  let pesos = parseFloat(pesosInput.value) //Intencionalmente normalizo diferente que al de arriba, que lo hago directo, para probar letias maneras de hacerlo, profe.
  let tasaDeCambio = 0.00026
  let dollars = pesos * tasaDeCambio
  dollarInput.value = dollars.toFixed(2)
})

dolar.addEventListener("input", function () {
  let dollars = parseFloat(dollarInput.value)
  let tasaDeCambio = 3800
  let pesos = dollars * tasaDeCambio
  pesosInput.value = pesos.toFixed(2)
})














