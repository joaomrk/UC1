const ask = require("readline-sync")
let turno = ask.question("qual seu turno?")
turno = turno.toUpperCase()
if (turno === "V"){
    console.log("Bom dia")
} else if (turno === "T") {
    console.log("Boa tarde")
} else if (turno === "N") {
    console.log("Boa noite")
} else {
    console.log("ERRO")
}

