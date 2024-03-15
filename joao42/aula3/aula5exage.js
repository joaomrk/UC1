let ask = require("readline-sync");
/*nome = "joao"
idade = 23
anoAtual = 2024    
anoBorn = 2000
*/

nome = ask.question("Qual o seu nome?")
//idade = Number(ask.question("Qual a sua idade?"))
let date = new Date()
let anoAtual = Number(date.getFullYear())
anoBorn = Number(ask.question("Em que ano voce nasceu?"))
idade = (anoAtual - anoBorn)
console.log(idade)
//Programa feito para descobrir se alguem é de maior ou de menor numa festa
comparacao = idade >= 18
if (comparacao){
    console.log("Voce",nome +",", "é de maior ta liberado pivete")
} else {
    console.log("Voce",nome +",", "é de menor da meia volta vagabundo!!")
}
anoAfter = 2050 - anoBorn
console.log(comparacao)
console.log(anoAfter)
console.log("Em 2050 voce tera",anoAfter,"anos.")
