const submitLogin = document.querySelector("#login form")
const message = document.querySelector("#formLoginMessage")

const handlesubmitlogin = (ev) => {
message.innerText = ""

ev.preventDefault()
let emailForm = ev.target.elements.email.value
let passwordForm = ev.target.elemets.password.value

if (emailForm === user_login.email && passwordForm === user_login.password){
    localStorage.setItem("email", emailForm)
    location.href = "./index.html"
    message.innerText = ""
} else {
    message.innerText = "Por favor introduce credenciales validas."
}}

submitLogin.addEventListener("submit", handlesubmitlogin)