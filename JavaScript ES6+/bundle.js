"use strict";

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
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
var find = arr.find(function (item) {
  return item === 4;
});
