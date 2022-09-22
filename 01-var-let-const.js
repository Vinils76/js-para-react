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