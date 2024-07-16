const userName = document.querySelector("#names");
const userAge = document.querySelector("#age");
const userEmail = document.querySelector("#email");
const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector("div");
const Btn = document.querySelector("Btn");
const ol = document.querySelector("ol");
let arr = [];

// form.addEventListener("submit" ,(e)=>{
//     e.preventDefault()
//     let obj = {Name:userName.value,
//         Age:userAge.value,
//         Email:userEmail.value
//     }
//     userName.value =""
//     userAge.value =""
//     userEmail.value =""

//     console.log(obj);
//     arr.push(obj)
//     console.log(arr);

//     div.innerHTML += `</br>
//     <li>${obj.Name}</li>
//     <li>${obj.Age}</li>
//     <li>${obj.Email}</li>
//     <button id ="Btn" onclick="">Clear</button>
//     `

// // const clear = document.querySelector("#Btn")

// // clear.addEventListener("click",()=>{
// //     div.innerHTML =""
// //     });
// })

// function clear(index) {
//     arr.splice(index , 1)
//     console.log(arr);

// }

// console.log(arr);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    Name: userName.value,
    Age: userAge.value,
    Email: userEmail.value,
  };
  arr.push(obj);

  userName.value = "";
  userAge.value = "";
  userEmail.value = "";

  ol.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    ol.innerHTML += `
        <li>${arr[i].Name}</li>
        <li>${arr[i].Age}</li>
        <li>${arr[i].Email}</li>
        <button id ="Btn">Clear</button>
        `;
    }
    console.log(arr);
    const Btn = document.querySelector("#Btn");
  
    Btn.addEventListener("click", () => {
 obj.Name=""
 obj.Age=""
 obj.Email=""
    });

});
