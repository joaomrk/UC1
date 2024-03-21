ask = require("readline-sync")
idade = ask.question("Qual a sua idade?")
if (idade >= 18){
    console.log("Voce e adulto!")
} else if(idade >= 13 && idade <= 17) {
    console.log("Voce e adolescente!")
} else {
    console.log("Voce e crianca!")
}