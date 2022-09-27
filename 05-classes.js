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