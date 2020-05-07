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

const arr = [1,2,3,4,5]

const newArr = arr.map(function (item, index) {
    return item + index;
})

console.log(newArr)

const sum = arr.reduce(function (total, next) {
    return total + next
})

const filter = arr.filter(function (item) {
    return item % 2 === 0
})

const find = arr.find(function (item) {
    return item === 4
})

//__________________________________
// Arrow Function

const arr = [1,2,3,4,5]

const newArr = arr.map((item, index) => {
    return item + index;
})
//quando tem apenas um argumento pode remover os parenteses
const newArr = arr.map(item => {
    return item + index;
})
//quando apenas retorna algo, pode tirar o return
const newArr = arr.map(item => item + index)

//para retornar um objeto de forma simplificada, é necessário colocá-lo dentro de ( )
const teste = () => ({nome: 'Juliana'})


//__________________________________________________________________
//valores padrão
//Os valores padrões evita que a funcção retorne NaN quando algum argumento não é passado.
const soma = (a = 3, b = 6) => a+b;

console.log(soma(1))
console.log(soma())