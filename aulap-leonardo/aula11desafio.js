const personagens = ["goku","pernalonga","ducky dogers","naruto","coragem o cao covarde","papa leguas","hebe camargo","jô soares nos anos 80","lionel richie","professor leonardo","mestre splinter"]
//gerar um numero aleatorio para que quando coloque essa funçao dê 
//um personagem aleatorio para cada pessoa
/*

function retornaPersonagem (tamanho) {
    return listinha[Math.floor(math.random()*tamanho)]
}
*/
function retornaPersonagem(array){
    const indice = Math.floor(Math.random()*personagens.length)
return array[indice];
}
const seuPersonagem = retornaPersonagem(personagens)
console.log(`voce é o ${seuPersonagem}`)