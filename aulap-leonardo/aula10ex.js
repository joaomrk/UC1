const ask = require("readline-sync")
const name = ask.question(`qual o seu nome ? `)
const age = ask.question(`qual sua idade? `)
const city = ask.question(`qual a sua cidade? `)
const color = ask.question(`qual a sua cor favorita? `)
const frase = "amo muito tudo isso"

console.log(`Nome: ${name}`)
console.log(`Idade: ${age}`)
console.log(`Cidade: ${city}`)
console.log(`A cor favorita de ${name} é ${color}`)
console.log(name.length) //mostra quantas letras tem na string 
console.log(name.trim()) //retira os espaços antes e depois da string
console.log(frase.includes("amo muito"))
const novaFrase = frase.replaceAll("amo","odeio")
console.log(novaFrase)