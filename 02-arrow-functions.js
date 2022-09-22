/* Formas de trabalhar com funções */

// Sintaxe tradicional
function nomeDaFuncao() {
    console.log('Função de sintaxe tradicional..');
}

// Sintaxe de função anônima
var outraFuncao = function(){
    console.log('Outra forma de declarar função');
};

// Chamada da função
nomeDaFuncao();
outraFuncao();

console.log('=========================');

/* Crie uma função que receba dois valores numéricps, calcule a diferença entre eles
e retorne o resultado para uma variavel externa.

2) Mostre no console o resltado */
let valor1 = 10;
let valor2 = 5;

function calcula(valor1, valor2){
     return valor1 - valor2;
}

let resultado = calcula(valor1, valor2);

console.log(resultado);

console.log('=========================');

/* Arrow function (função "seta/flecha")
Possibilita diversas sintaxes, e até simplificação */

const exemplo1 = () => { 
    console.log('Uma arrow function qualquer');
};

// Arrow function com parâmetro
/* exemplo1();

const ola = (nome) => { podemos tirar os parenteses se tiver apenas um parametro
    console.log('Olá '+nome);
}; */

// Versão simplificada

const ola = nome => console.log('Olá '+nome);

ola('Antonio');

// Sintaxe
/* const metade = (valor) => {
    return valor / 2;
} */

// Arrow function com retorno IMPLÍCITO (simplificado)
const metade = valor => valor / 2;

console.log(metade(100) );

// Parametro com valor padrão (caso valor não declarado)
const multiplicaValores = (valor, fator = 2) => valor * fator;


console.log(multiplicaValores(10, 5) );
console.log(multiplicaValores(4) ); //valor não declarado então usa-se o valor padrão "2"


/* Monte uma arrow function que receba um nome de pessoa e a converta para letras maiúsculas.

-Chame a função 3x (passando nomes diferentes) e exibindo no console os resultados */

const nome = ['antonio', 'chapolin', 'chaves'];

const usuario = nome => nome.toUpperCase();

console.log(usuario(nome[0]) );
console.log(usuario(nome[1]) );
console.log(usuario(nome[2]) );
