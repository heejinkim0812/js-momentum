const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array를 string으로 변환해서 저장
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //toDos 삭제 업데이트
    saveToDo(); //local storage에 저장
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li 내부에 span 넣음
    li.appendChild(button); //li 내부에 삭제 button 넣음
    toDoList.appendChild(li); //submit할때마다 toDoList에 list 추가 
}

function handleToDoSubmit(event){
    event.preventDefault(); //새로고침 막음
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        id: Date.now() ,
        text: newTodo,
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); 
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //parse해서 array 형식으로 만듦
    toDos = parsedToDos; //push된 기존의 array를 업데이트 
    parsedToDos.forEach(paintToDo); //paintToDo에 array인자 하나씩 넣어줌 
}

if(savedUsername!==null){
    toDoForm.classList.remove(HIDDEN_CLASSNAME); 
    toDoList.classList.remove(HIDDEN_CLASSNAME); 
}
