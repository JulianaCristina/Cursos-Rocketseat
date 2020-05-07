// class List{
//     constructor() {
//         this.data = []
//     }
//     add(data){
//         this.data.push(data)
//         console.log(this.data)
//     }
// }
//
// class TodoList extends List{
//
//     constructor() {
//         super();
//
//         this.usuario = 'Diego';
//     }
//
//     mostraUsuario(){
//         console.log(this.usuario)
//     }
//
// }
//
// let MinhaLista =  new TodoList();
//
// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.add('NovoTodo');
// }
//
// const arr = [1,2,3,4,5]
//
// const newArr = arr.map(function (item, index) {
//     return item + index;
// })
//
// console.log(newArr)
//
// const sum = arr.reduce(function (total, next) {
//     return total + next
// })
//
// const filter = arr.filter(function (item) {
//     return item % 2 === 0
// })
//
// const find = arr.find(function (item) {
//     return item === 4
// })
//
// //__________________________________
// // Arrow Function
//
// const arr = [1,2,3,4,5]
//
// const newArr = arr.map((item, index) => {
//     return item + index;
// })
// //quando tem apenas um argumento pode remover os parenteses
// const newArr = arr.map(item => {
//     return item + index;
// })
// //quando apenas retorna algo, pode tirar o return
// const newArr = arr.map(item => item + index)
//
// //para retornar um objeto de forma simplificada, é necessário colocá-lo dentro de ( )
// const teste = () => ({nome: 'Juliana'})
//
//
// //__________________________________________________________________
// //valores padrão
// //Os valores padrões evita que a funcção retorne NaN quando algum argumento não é passado.
// const soma = (a = 3, b = 6) => a+b;
//
// console.log(soma(1))
// console.log(soma())
//
// //Desestruração;
//
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//         cidade: 'Berlândia',
//         estado: 'MG'
//     }
// }
// //para evitar fazer assim
// const nome = usuario.idade;
// //faz assim
//
// const {nome, idade, endereco:{cidade}} = usuario;
//
// //Também é possível usar a desestruturação em funções;
//
// function mostraNome({nome, idade}) {
//     console.log(nome, idade)
// }
//
// mostraNome(usuario)
//
//
// // rest
//
// const arr = [1,2,3,4]
//
// const[a,b, ...c] = arr;
//
// //exemplo 2
//
// const usuario = {
//     nome: 'Juliana',
//     idade: 22,
//     empresa: 'No one'
// }
//
// const {nome, ...resto} = usuario;
//
// //parametro de funcao
//
// function soma(a, b) {
//     return a + b
//
// }
//
// //to
//
// function soma(...params) {
//     return params.reduce((total, next) => total + next);
// }
//
// //spred - repassa as info p outra estrutura de dados.
//
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
//
// const arr3 = [ ...arr1, ...arr2]
//
// //sobrepoe apenas uma informação, mantendo as outras
//
// const usuario1= {
//     nome: 'Juliana',
//     idade: 22,
//     empresa: 'No one'
// }
//
// const usuario2 = { ...usuario1, nome:'César'}
//
//
// // template literals
//
// // `${variavel}`
//
//
// //Object short syntax
//
// const nome = 'Juliana'
// const idade = 22
//
// const usuario = {
//     nome,
//     idade,
//     empresa: 'No one'
// }
"use strict";
