ask = require("readline-sync")
function calculaArea(altura, largura){
    const area = altura * largura
    console.log(area)
}

calculaArea(2,3)

//colocar meu nome e idade em forma de função
function myNameandAge(name, age){
    const NameandAge = `meu nome é ${name} e eu tenho ${age} anos`
    console.log(NameandAge)
}
myNameandAge(`joao marco`, 23)


let nome = "Joao marco"
console.log(`meu nome é ${nome}`)//template string é quando se usa crase ao inves de aspas

function calculaNota(nota1,nota2,nota3){
    const media = (nota1+nota2+nota3)/3
    console.log(`voce tirou ${media.toFixed(2)} no conceito final`)
    if (media < 60) {
        console.log(`voce reprovou`)
    } else {
        console.log(`voce passou`)
    }
}
calculaNota(55,80,90)
calculaNota(33,44,55)

let numero = ask.question(`qual o numero voce quer saber ${nome}?`)
function numberImparouPar(numero){
    return (numero %2 === 0)
}
if (numberImparouPar(numero)){
    console.log(`${numero} é par`)
}else {
    console.log(`${numero} é impar`)
}
