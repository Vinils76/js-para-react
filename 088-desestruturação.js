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