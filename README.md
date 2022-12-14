# Anotações

# Principais tópicos de atenção e estudos
## Declaração de variáveis e constantes (let e const)
```js
/* Jeito antigo de usar variaveis */
var meuNome = 'Vinicius';

/* Jeito moderno de usar váriavel */
//let meuNome = 'Antonio';
const meuSobre = 'Silva';

console.log(meuSobre);

let idade = 20;
if( idade >= 18 ){
    var mensagem = 'É maior de idade';
} else {
    var mensagem = 'É menor de idade';
}
/* let e const possuem escopo de BLOCO (se chamado dentro de um if ou função só funciona local)
    Se o let for declarado fora, ele se torna global (funciona em qualquer lugar) */

console.log(mensagem);
```
## Declaração e uso de funções (nomeadas e arrow functions), com ou sem parâmetros e retorno de dados
```js
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
```
## Template Literals (Strings)
```js
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
```
## Módulos externos (Importação e exportação)
```js
/* Primeiro criar um objeto em uma pasta modulos */
const pessoa = {
    nome : 'Antonio',
    idade : 21,
    cidade : 'São Paulo'
};

export default pessoa;

/* Em seguida fazer um package.json para o modulo funcionar */
{
    "type": "module"
}
/* E em seguida fazer o import para o arquivo desejado */
import pessoa from './modulos/pessoa.js';

console.log(pessoa.nome);
```

## Classes 
```js
class Pessoa {
    // Propriedades
    nome = 'sem nome';
    genero = 'não informado';
    idade;

    // Métodos
    mostraGenero() {
        console.log( this.genero );
    }

    mostraNome(){
        console.log( this.nome );
    }

    mostraIdade(){
       /*  if ( this.idade >= 18 ) { //Para acessar a propriedade de uma classe se usa 'this.'
            return 'Maior de idade';

        } else {

           return 'Menor de idade';
        } */

        return this.idade >= 18 ? 'É maior de idade' : 'É menor de idade';

        
    }
}

class Aluno  extends Pessoa {
    //propriedades (não se usa var/let pois é uma propriedade de classe)
    matricula;
    curso;


// Métodos
mostraDados(){
    console.log(this.matricula);
    console.log(this.curso);

    // métodos da super classe
    this.mostraNome();
    this.mostraGenero();
    this.mostraIdade();
    }
}

/* Criando objetos/instâncias */
let umaPessoa = new Pessoa;
umaPessoa.nome = 'Tiago';
umaPessoa.genero = 'masculino';

console.log(umaPessoa);


let outraPessoa = new Pessoa;
outraPessoa.nome = 'Zé';

console.log(outraPessoa);

// Objeto herdando recursos
let aluno = new Aluno;
aluno.nome = 'Luna';
aluno.genero = 'feminino';
aluno.idade = 50;
aluno.matricula = '123';
aluno.curso = 'JS para React';

aluno.mostraDados();
console.log(aluno.idade);
console.log(aluno.mostraIdade());
```

## Operador (spread ou rest)
- spread (espalhar): usado para dividir elementos de um array ou propriedades de um objeto
```js
/* Usando o ... como operator spread (espalhar)
Na prática, copiamos o conteúdo de um array (bandas) para dentro de outro (maisBnadas). */

//IMUTABILIDADE (não muda)
const bandas = ['Rush', 'Slayer', 'Guns', 'Black Sabbath'];
const maisBandas = [...bandas, 'Van halen', 'Deep Purple'];

console.log(maisBandas);

console.log("=====================================================");

// Spread com objeto
const dados = {
    nome: 'Camila',
    idade: 18
};

const novosDados = {
    ...dados,
    cidade: 'São Paulo',
    estado: 'SP'
};

console.log(novosDados);
```
- rest (resto, sobra, resíduo): usado para mesclar uma lista de parâmetros de função como um array 

```js
const ordenar = ( ...parametros ) => { return parametros.sort(); 
}

console.log( ordenar('Luna', 'Nem', 'João', 'Gato') );

console.log( ordenar('Sticky fingers', 'Tyler', 'McMiller', 'Frank Ocean'));

let cafezinho = ['Pãozinho de parmesão', 'Presunto e queijo', 'Cinamon roll', 'Bolinho de cenoura', 'Cafézinho gelado'];

console.log (ordenar(...cafezinho)); // Spread


const soma = (...valores) => { let total = 0;

    for ( let valor of valores ){
        total += valor;
    }
    return total;
}
 


console.log( soma(10, 20));
console.log( soma(10, 20, 55, 21, 98, 23));
```

## Desestruturação
```js
/* Desestruturação (Destructuring)
Extrair dados facilmente de um array ou obejto e armazena-los em váriaveis/constantes */

// Usando desestruturação em arrays
const [a, b] = ['Luna', 'Nem'];
console.log(a);
console.log(b);

const alunos = ['amora', 'jão', 'gato'];
const [amora, jao, gato] = alunos;
console.log(amora);
console.log(jao);
console.log(gato);

console.log('=====================================');

const unidades = ['Penha', 'Tatuape', 'Carrão', 'Barra-funda'];
const [penha, tatuape, , BF] = unidades;
console.log(penha);
console.log(tatuape);
console.log(BF);

console.log('=====================================');

// Usando desestruturação e objetos
const {nome, cidade} = {nome: 'Fulano', idade: 19, cidade: 'São Paulo'};
console.log(nome);
console.log(cidade);

console.log('=====================================');

const dados = {
    nome: 'Saitama',
    curso: 'Punch',
    nascimento: '1111/01/01'
}

const { nome: aluno, curso, nascimento } = dados;
console.log(aluno);
console.log(curso);
console.log(nascimento);
```

## Métodos/Funções para array
- map
- filter
- reduce
```js
/* map (mapeia, transformar em outra coisa)
Passa sobre elementos de um array e realiza operações neles através de uma função (callback) gerando um novo array */

const numeros = [10, 20, 30, 40, 50];

/* const numerosDobrados = numeros.map( function( numero ){
    return numero * 2;
}); */

const numerosDobrados = numeros.map( numero => numero * 2 );// Arrow function

console.log( numeros ); // original
console.log( numerosDobrados ); // transformado/mapeado

console.log('===============================================');

const alunos = ['Antonio', 'Tyler', 'Kendrik', 'Miller'];

const lista = alunos.map( alunos => alunos.toUpperCase() );

console.log(alunos);
console.log(lista);

console.log('===============================================');

/* Filter vai retornar um array de acordo com o filtro aplicado, no exemplo a segur usamos um filtro para filtrar quais valores bateram a meta */

const vendas = [1500, 2000, 5000, 10_000];
const meta = 4000;
const vendasAcimaDaMeta = vendas.filter( venda => venda > meta);

console.log(vendas);
console.log(vendasAcimaDaMeta);

const listaDeAlunos = ['Garfinho', 'Masha', 'Buzz', 'Woody', 'Jesse', 'Wendy'];

const resultado = listaDeAlunos.filter( aluno => {
   /*  if(aluno.charAt(0) == 'M'){ */
        if(aluno.startsWith('M')){
            return aluno;
        }
        return aluno;
    }
);

const simplifica = listaDeAlunos.filter( aluno => aluno.startsWith('M') ?? aluno);

console.log(listaDeAlunos);
console.log(resultado);
console.log(simplifica);

const cursos = [
    { id: 1, titulo: 'HTML5 e CSS3', categoria: 'Front-End', preco: 500},
    { id: 2, titulo: 'HJs e React', categoria: 'Front-End', preco: 800},
    { id: 3, titulo: 'React Native', categoria: 'Mobile', preco: 1000},
    { id: 4, titulo: 'Photoshop', categoria: 'Design', preco: 300},
    { id: 5, titulo: 'PHP e Mysql', categoria: 'Back-End', preco: 600},
    { id: 6, titulo: 'Flutter', categoria: 'Mobile', preco: 900}
];

const cursosFront = cursos.filter( curso => curso.categoria == 'Front-End' );

console.log(cursos);
console.log(cursosFront);

const titulos = cursos.map( curso => curso.titulo);

console.log(titulos);

const titulosFront = cursos
                        .filter( curso => curso.categoria == 'Front-End')
                        .map ( curso => curso.titulo);

console.log('===============================================');

/* Reduce ( reduzir a um único valor/resultado) */

const valores = [10, 50, 300, 5000, 100];

const soma = valores.reduce( (acumulador, valor) => {
    return acumulador + valor
}, 0 );

console.log(soma);

console.log('===============================');

/*  Filter e Reduce */

const somaCursosMobile = cursos
                            .filter( curso => curso.categoria == 'Mobile' )
                            .reduce( (acumulador, curso ) => {
                                return acumulador + curso.preco
                            }, 0 );

console.log(somaCursosMobile);
```

## async/await (sintaxe para comunicação assincrona [ajax])
```js
/* Trabalhado com comunicação assíncrona */
import fetch from 'node-fetch';

fetch('http://jsonplaceholder.typicode.com/todos/1')
.then(resposta => resposta.json() )
.then(dados => console.log(dados) )
.catch( error => console.log('Erro na operação: '+error.errno) );

/*  Sinaxe usando função e async/await */

// async function acessaApi(){ sintaxe tradicional
const acessaApi = async () => { // sintaxe arrow function
    try {
        const resposta = await fetch('http://jsonplaceholder.typicode.com/todos/1');
        const dados = await resposta.json();
        console.log(dados);
    } catch (error) {
        console.log('Deu ruim: '+error.errno);
    }
}

acessaApi();
```

