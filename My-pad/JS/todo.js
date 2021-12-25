const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => parseInt(toDo.id) !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function checkToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => parseInt(toDo.id) !== parseInt(li.id));
    if (li.style.textDecoration == "") {
        li.style.textDecoration = "line-through";
        li.style.textDecorationColor = "red"
    } else {
        li.style.textDecoration = "";
        li.style.textDecorationColor = "";
    }

}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("div");
    span.innerText = newTodo.text;
    const button1 = document.createElement("span");
    button1.className = "material-icons";
    const button2 = document.createElement("span");
    button2.className = "material-icons";
    button1.innerText = "done"
    button2.innerText = "delete"
    button1.addEventListener("click", checkToDo);
    button2.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button1);
    li.appendChild(button2);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Math.round(Math.random() * 100)
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){     console.log(item); }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}