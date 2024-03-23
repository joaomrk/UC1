ask = require("readline-sync")
let nomeCompleto = 'joao'
let tipoDeJogo = "DO" //IN indica internacional DO indica domestico
let etapaDeJogo = ask.question('Qual a etapa de jogo') //SF semi final , DT decisão de terceiro lugar, e FI final
let categoria = ask.question("qual a categoria?") //pode ser 1 2 3 4
let quantidadeDeIngressos = ask.question("Quantos ingressos?")
switch(etapaDeJogo){
    case "SF":
switch(categoria){
        case "1":1320
    break;
        case "2":880
    break;
        case "3":550
    break;
        case "4":220
    break;
    }
break; 
    case"DT":
switch(categoria){
        case "1":660 
    break;
        case "2":440 
    break;
        case "3":330
    break;
        case "4":170
    break;
    }
break; 
    case"FI":
    switch(categoria){
        case "1":1980 
    break;
        case "2":1320
    break;
        case "3":880
    break;
        case "4":330
    break;
    }
break;
}
IN = etapaDeJogo * 4,10

console.log()
