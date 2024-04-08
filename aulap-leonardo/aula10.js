const ask = require("readline-sync")
const name = ask.question(`qual o seu nome ?`)
const age = ask.question(`qual sua idade?`)
const city = ask.question(`qual a sua cidade?`)

console.log(`Nome: ${name}`)
console.log(`Idade: ${age}`)
console.log(`Cidade: ${city}`)