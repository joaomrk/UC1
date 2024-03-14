let ask = require('readline-sync');
let name
let age 
console.log(typeof name)
//foi impresso undefined nesse codigo pq eu não defini a variavel
age = ask.question('qual sua idade?')

name = ask.question('qual seu nome?')
console.log(age)
console.log(name)