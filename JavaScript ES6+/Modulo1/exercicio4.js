// 4.1
// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:

const usuario = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

//resposta
const {nome, endereco:{cidade, estado}} = usuario

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2...

// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:
//Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente e a função poder retornar apenas:
// return `${nome} tem ${idade} anos.`;

//
// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
// }
// mostraInfo({ nome: 'Diego', idade: 23 })


function mostraInfo({nome, idade}) {
    console.log(`${nome} tem ${idade} anos.`);
}
mostraInfo({ nome: 'Diego', idade: 23 })