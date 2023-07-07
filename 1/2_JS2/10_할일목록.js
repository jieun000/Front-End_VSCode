// const todos = document.querySelector('#todos');
// const todoList = document.querySelector('#todo-list');
// const todoInput = todos.querySelector('input');

// todos.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();
//     let newTodo = todoInput.value;
//     console.log(newTodo); // 확인용 코드
//     todoInput.value = "";

//     printTodo(newTodo);
// }
// function printTodo(newTodo) {
//     // const li = document.createElement('li');    //<li></li>
//     // const span = document.createElement('span');    //<span></span>
//     // li.append(span);    //<li><span></span></li>
//     // span.innerHTML = newTodo;
//     // const btn = document.createElement('button');
//     // btn.innerHTML = 'X';
//     // li.append(btn);
//     // todoList.append(li);
//     // console.log(li); // 확인용 코드
//     // btn.addEventListener('click', deleteTodo);
// // }
//     //이게 더 간단 
//     const data = `<li><span>${newTodo}</span>
//     <button>X</button></li>`
//     todoList.insertAdjacentHTML('beforeend', data);

//     document.querySelector('button').addEventListener('click', deleteTodo); // 첫번째거만 지워짐
//     document.querySelectorAll('button')[0].addEventListener('click', deleteTodo);
// }
// function deleteTodo(e) {
//     // console.log('삭제할코드쓸거임');
//     // console.dir('e.target');
//     // console.log(e.target.parentElement); // 확인용 코드
//     let pn = e.target.parentElement;
//     pn.remove();
// }



// const todos = document.querySelector('#todos');
// const todoList = document.querySelector('#todo-list');
// const todoInput = todos.querySelector('input');

// let arr = [];

// todos.addEventListener('submit', onSubmit);

// function saveTodo() {
//     localStorage.setItem('todos', JSON.stringify(arr));
// }
// function onSubmit(e) {
//     e.preventDefault();
//     let newTodo = todoInput.value;
//     arr.push(newTodo);
//     // console.log(arr);
//     saveTodo();
//     // console.log(arr);
//     // console.log(newTodo);확인용 코드
//     todoInput.value = "";
//     printTodo(newTodo);
// }

// function printTodo(newTodo) {
//     const li = document.createElement('li');   
//     const span = document.createElement('span');   
//     li.append(span);    
//     span.innerHTML = newTodo;
//     const btn = document.createElement('button');
//     btn.innerHTML = 'X';
//     li.append(btn);
//     todoList.append(li);
//     btn.addEventListener('click', deleteTodo);
// }
// function deleteTodo(e) {
//     // console.log(e.target.parentElement); // 확인용 코드
//     let pn = e.target.parentElement;
//     pn.remove();
// }

// let getTodo = localStorage.getItem('todos');

// if(getTodo !== null) {
//     let parseTodo = JSON.parse(getTodo);
//     arr = parseTodo;
//     console.log(parseTodo); // 확인용코드
//     parseTodo.foreach((data) => {
//         printTodo(data);
//     });
// }



const todos = document.querySelector('#todos');
const todoList = document.querySelector('#todo-list');
const todoInput = todos.querySelector('input');

let arr = [];

todos.addEventListener('submit', onSubmit);

function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(arr));
}
function onSubmit(e) {
    e.preventDefault();
    let newTodo = todoInput.value;

    let Obj = {
        key: Date.now(),
        text: newTodo,
    };
    arr.push(Obj);
    saveTodo();
    todoInput.value = "";
    printTodo(Obj);
}

function printTodo(newTodo) {
    const li = document.createElement('li');   
    const span = document.createElement('span');   
    li.append(span);    
    span.innerHTML = newTodo.text;
    li.id = newTodo.key;
    const btn = document.createElement('button');
    btn.innerHTML = 'X';
    li.append(btn);
    todoList.append(li);
    btn.addEventListener('click', deleteTodo);
}
function deleteTodo(e) {
    // console.log(e.target.parentElement); 확인용 코드
    let pn = e.target.parentElement;
        //filter는 조건에 만족하는 값만 리턴
    // arr = arr.filter((todo) => todo.key !== Number(pn.id));   
    arr = arr.filter((todo) => todo.key !== parseInt(pn.id));   
    saveTodo();
    pn.remove();
}

let getTodo = localStorage.getItem('todos');

if(getTodo !== null) {
    let parseTodo = JSON.parse(getTodo);
    arr = parseTodo;
    console.log(parseTodo); // 확인용코드
    parseTodo.foreach((data) => {
        printTodo(data);
    });
}