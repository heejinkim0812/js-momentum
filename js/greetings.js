const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


function onLoginSubmit(event){
    event.preventDefault(); //새로고침 막아줌
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //localStorage에 username 저장
    loginForm.classList.add(HIDDEN_CLASSNAME); //login form 숨기기
    paintGreetings(username); //greeting
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    //show greeting
    paintGreetings(savedUsername);
}


