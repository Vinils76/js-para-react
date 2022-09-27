

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
