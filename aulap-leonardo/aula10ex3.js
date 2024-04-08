const ask = require("readline-sync")
const racasDeCachorro = ["pisncher", "pastor alemão", "salsichinha", "liasa apso", "dalmata", "vira lata"]
const indexEscolhido = 3
const pergunta = Number(ask.question(`qual o numero escolhido?`)) -1
console.log("raça escolhida:" , racasDeCachorro[pergunta])