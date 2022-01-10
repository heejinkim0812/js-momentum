const loginForm = document.querySelector("#login-form");
const helloForm = document.querySelector("#hello");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
// const quoteForm = document.querySelector("#quote");
// const toDoForm = document.querySelector("#todo-form");
// const toDoList = document.querySelector("#todo-list");
// const weatherForm = document.querySelector("#weather");

function onLoginSubmit(event){
    event.preventDefault(); //새로고침 막아줌
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //localStorage에 username 저장
    loginForm.classList.add(HIDDEN_CLASSNAME); //login form 숨기기
    helloForm.classList.add(HIDDEN_CLASSNAME); //hello form 숨기기
    paintGreetings(username);
    clock.classList.remove(HIDDEN_CLASSNAME); //clock
    quoteForm.classList.remove(HIDDEN_CLASSNAME); //quote
    toDoForm.classList.remove(HIDDEN_CLASSNAME); //todo-form
    toDoList.classList.remove(HIDDEN_CLASSNAME); //todo-list
    weatherForm.classList.remove(HIDDEN_CLASSNAME); //weather 
}

function paintGreetings(username){
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
    //show login form
    helloForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    //show greeting
    paintGreetings(savedUsername);
}


