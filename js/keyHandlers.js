import calculate from "./calculate.js"

const input = document.querySelector("#input")

export function handleButtonPress (ev) { // Aqui precisamos inserir a função charKeyBtn., que será inserida trocando o nome da função "charKeyBtn" por "ev.currentTarget". Vamos precisar também do const input aqui.
  const value = ev.currentTarget.dataset.value
  input.value += value
}

export function handleClearButton () {
  input.value = ""
  input.focus()
}

export function handleTyping (ev) { // o array de allowedKeys precisa vir para cá.
  ev.preventDefault()
  const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculate() // precisamos importar essa função aqui também, basta selecionar a parte azul dela e apertar ctrl + espaço e selecionar a função, para que fique acima como importada nesse arquivo, no entanto é importante colocar o ".js" no final !
  }
}