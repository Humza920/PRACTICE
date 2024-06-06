const form = document.querySelector("form")
const email = document.querySelector("#email")
const pass = document.querySelector("#password")
const userName = document.querySelector("#full-name")


const arr = []

form.addEventListener("submit", (event) => {
        event.preventDefault()
        
     const data = arr.userName = userName.value
     const data2 =  arr.email = email.value
     const data3 =  arr.pass = pass.value
       
        userName.value = ""
        email.value = ""
        pass.value = ""

        console.log(arr);

    })
window.localStorage.setItem()

