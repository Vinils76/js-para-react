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