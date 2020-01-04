// Creating an Interface
interface ToDo {
  title:string;
  text:string;
}

// Function to Print Interface
function showToDo(todo:ToDo) {
  console.log(todo.title + ": " + todo.text);
}

// Interface Assignment
let myTodo = {title: 'Trash', text: 'Take out trash'}

// Run Interface
showToDo(myTodo);
console.log('Interfaces allows you to create custom datatypes.');
console.log('');
