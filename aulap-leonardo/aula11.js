const ask = require("readline-sync")
const letras = ["A","B","C","D","E","F","G","H"]
const pergunta = Number(ask.question(`qual o numero escolhido?`)) -1
console.log("Letra escolhido:" , letras[pergunta])
letras.splice(2,1)
letras.splice(3,2)
console.log(letras)