import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

// const main = document.querySelector("main") 
// const root = document.querySelector(":root")
// ambas constantes foram movidas para o arquivo "themeSwitcher.js"
// esse input tambem se faz necessário no arquivo. keyHandlers.js
// A const resultInput pode ser retirada daqui.

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById("clear").addEventListener("click", handleClearButton)
document.getElementById("input").addEventListener("keydown", handleTyping) // tirar input.addEventListner e substituir pelo o que está aqui.
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)