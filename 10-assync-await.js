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