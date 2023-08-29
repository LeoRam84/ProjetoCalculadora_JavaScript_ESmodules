export default function (ev) { // aqui não tem nada que precise ser declarado novamente, já que o botão está usando o ev.currentTarget e nenhuma id ou classe. No entanto, no decorrer da aula, o professor percebeu que aqui também existe a const "resultInput", que no caso precisa ser declarada novamente.
  const button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(document.querySelector("#result").value) // Aqui foi trocada a constante "resultInput" pelo código "document.querySelector('#result')"
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
}
// Aqui, como está como export default em uma função anônima, no arquivo index.js essa função poderá ser declarada ou chamada ou importada (geralmente automáticamente após ser chamada), com o nome desse arquivo !