const getData = localStorage.getItem("send")
const formLogin = document.querySelector("form")

console.log(getData);

formLogin.addEventListener('submit' , (event) =>{
    event.preventDefault()
    
if (getData === null || getData === null) {
        console.log("Create an account before LogIn");
}

const email = document.querySelector("#email").value
const pass = document.querySelector("#password").value

if (getData === email || getData === pass) {

    alert("SUCCESFULLY LOGIN");
    formLogin.reset()
    window.location = "quiz.html"
    
}  
    else {
        console.log("incorrect email or pass");}  
})