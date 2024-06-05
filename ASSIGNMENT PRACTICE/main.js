const form = document.querySelector("form")
const email = document.querySelector("#email")
const pass = document.querySelector("#password")
const userName = document.querySelector("#full-name")


const arr = {}
form.addEventListener("submit", (event) => {
    event.preventDefault()
   arr.email = email.value
   arr.password = pass.value
   arr.fullName = userName.value
})
console.log(arr);
