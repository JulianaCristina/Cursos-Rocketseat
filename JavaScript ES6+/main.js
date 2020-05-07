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