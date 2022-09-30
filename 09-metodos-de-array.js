

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