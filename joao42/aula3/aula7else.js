ask = require("readline-sync")
let paisDeOrigem = ask.question("qual sua nacionalidade?(BR,RU,ME,IT)")
if (paisDeOrigem === 'BR') {
    console.log('voce e brasileiro!')
} else if (paisDeOrigem === 'RU') {
    console.log('voce e russo!')
} else if (paisDeOrigem === 'ME') {
    console.log('voce e mexicano')
}  else if (paisDeOrigem === 'IT')  {
    console.log('voce e italiano')
} else {
    console.log('nacionalidade nao encontrada')    
}
//descobrindo a nacionalidade
let comidaFavorita = "Arroz de forno"
let comida = "Figado com cenoura"
if (comidaFavorita !== comida) {
    console.log("Essa nao é a janta!")
} else if (comidaFavorita === "Arroz de forno") {
    console.log("é isso")
} else {
    console.log("Hoje vou jantar bem")
}
//descobrindo a comida
let time = "gremio"
let timeruim = "inter"

if (time = "gremio" ) {
    console.log("vamo time")
} else {
    console.log("sai fora secador")
}
//times 
//poder de dois
let killua = 300
let leorio = 200
if (killua >= leorio){
    console.log("o cara é foda patroa")
} else {
    console.log("nao nao nao")
}