const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event){
    event.preventDefault(); //새로고침 막아줌(event object 가시화)
    console.log(loginInput.value); 
}

loginForm.addEventListener("submit", onLoginSubmit);