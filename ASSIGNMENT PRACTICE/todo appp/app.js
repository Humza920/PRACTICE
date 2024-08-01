import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { db } from "./config.js";

const form = document.querySelector("#form")
const todo = document.querySelector("#todo")

form.addEventListener("submit" , async(e)=>{
    e.preventDefault()
    console.log(todo.value);
    try {
        const docRef = await addDoc(collection(db, "todos"), {
            todo: todo.value
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})