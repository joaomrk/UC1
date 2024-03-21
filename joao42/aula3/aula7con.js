ask = require("readline-sync")
let idade = ask.question("Qual a sua idade?")
let comparacao = (idade >= 18)
if (comparacao) { console.log("Voce é de maior pode tirar a habilitação")}
 else { console.log("Voce é de menor rala peito daqui!")}
//é para aparecer que eu sou de maior mas talvez tenha errado o boolean