let ask = require("readline-sync")
let day = ask.question("Qual o seu horario?");
day = day.toUpperCase();
switch (day) {
  case "M":
    console.log("Bom dia");
    break;
  case "V":
    console.log("Boa tarde");
    break;
  case "N":
    console.log("Boa noite");
    break;
  default:
    console.log("Ratiou paizão");
}