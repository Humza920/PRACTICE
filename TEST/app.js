const userName = document.querySelector("#names")
const userAge = document.querySelector("#age")
const userEmail = document.querySelector("#email")
const form = document.querySelector("form")
const input = document.querySelector("input")
const button = document.querySelector("button")
const div = document.querySelector("div")

let arr = []

form.addEventListener("submit" ,(e)=>{
    e.preventDefault()
    let obj = {Name:userName.value,
        Age:userAge.value,
        Email:userEmail.value
    }
    userName.value =""
    userAge.value =""
    userEmail.value =""


    console.log(obj);
    arr.push(obj)
    console.log(arr);

    div.innerHTML += `
    <li>${obj.Name}</li>
    <li>${obj.Age}</li>
    <li>${obj.Email}</li>
    `

    
})