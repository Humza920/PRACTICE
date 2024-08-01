// GETTING DATA

const getData = localStorage.getItem("send");
console.log(getData);
const data = JSON.parse(getData);
console.log(data);

// HTML ELEMENTS THROUGH JS

const formLogin = document.querySelector("form");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");

// LOG / NOR-LOG

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  if (getData === null || getData === "") {
    console.log("Create an account before LogIn");
  }
  if ( getData?.includes(email.value) && getData?.includes(pass.value) ) {
    alert("SUCCESFULLY LOGIN");
    formLogin.reset();
    window.location = "quiz.html";
  } else {
    console.log("incorrect email or pass");

    email.value = "";
    pass.value = "";
    alert("incorrect email or pass");
  }

  email.value = "";
  pass.value = "";

});





// TRY IN LOOP

// const func = () => {
  //   for (let i = 0; i < getData.length; i++) {
    //    if(email.value === getData[i].email && Password.value === getData[i].pass) {
  //     console.log("Login Successfully");
  //     break;
  //    }
  //    else {
  //     console.log("Retry")
  //    }
  //   }
  // };
  
  // form.addEventListener("submit", (event) => {
    //   event.preventDefault();
    
    //   func();
    // });
    




    // EXTRA CODE

    // GETTING DATA
    
    // let getData = JSON.parse(localStorage.getItem("send"));
    // console.log(getData);
    
    // HTML ELEMENT IN JAVASCRIPT
    
    // let email = document.querySelector("#email");
    // let Password = document.querySelector("#password");
    // let form = document.querySelector("form");
  
    // LOGIN
    
    // form.addEventListener('submit', event => {
    // event.preventDefault()
    // if (getData[0].email === email.value && getData[0].pass === Password.value) {
    // alert('Login SuccesFull')
    // window.location = 'quiz.html'
    // }
    // else {
    // alert('Incorrect Email or Pass')
    // }
    // })
