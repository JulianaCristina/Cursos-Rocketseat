const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'},
];

// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const idade = usuarios.map(item => item.idade)

console.log(idade)


//Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

// const filter = arr.filter(function (item) {
//     return item % 2 === 0
// })

const filter = usuarios.filter(item => {
    if (item.empresa === 'Rocketseat' && item.idade > 18) {
        console.log(item)
    }
})
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

const find = usuarios.find(item => item.empresa === 'Facebook')

console.log(find)

// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:
// // Resultado:
//     [
//         { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//         { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
//     ]

const mult = usuarios
    .map(item => ({...item, idade: item.idade * 2}))
    .filter(({idade}) => idade <= 50)

console.log(mult)