function redirect() {
  window.location = "tabela_imc.html"
}

function calculaImc(peso, altura) {
  var sexo = document.getElementById("sexo").value
  var nome = document.getElementById("nome").value
  var peso = parseFloat(document.getElementById("peso").value)
  var altura = parseFloat(document.getElementById("altura").value)
  var imc = (peso * 10000) / (altura * altura)
  var imcDecimal = imc.toFixed(2)

  alert(nome + ", seu IMC é de " + imcDecimal)
  redirect()
}
