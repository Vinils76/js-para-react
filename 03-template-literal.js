// Concatenação
const nome = 'Antonio';
const sobreNome = 'Leite da Silva';
let idade = 21;
let cidade = 'São Paulo';
let estado = 'SP';

/* Meu nome é Antonio Leite da Silva, tenho 21 anos e moro atualmente na cidade de São Paulo - SP. */

//Método template literal/string
let mensagem = `Meu nome é ${nome} ${sobreNome}, tenho ${idade} anos e moro atualmente na cidade de ${cidade} - ${estado}. 
Sou ${idade >= 18 ? 'maior' : 'menor'} de idade.`

console.log(mensagem);