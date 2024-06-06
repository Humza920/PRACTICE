const form = document.querySelector("form")
const email = document.querySelector("#email")
const pass = document.querySelector("#password")
const userName = document.querySelector("#full-name")

const arr = []

function local() {
   
   localStorage.setItem("email", arr.email);
   localStorage.setItem("password", arr.pass );
   localStorage.setItem("userName", arr.userName);
}


form.addEventListener("submit", (event) => {
   event.preventDefault()     
   arr.userName = userName.value
   arr.email = email.value
   arr.pass = pass.value
   
   local()

   userName.value = ""
   email.value = ""
   pass.value = ""

   console.log(arr);

   form.reset()
   window.location = "index.html"
        
    })

