// import {
//   collection,
//   addDoc,
//   getDocs,
//   doc,
//   deleteDoc,
//   updateDoc,
// } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// import { db } from "./config.js";
                  



// let form = document.querySelector("#form");
// let todo = document.querySelector("#todo");
// let ul = document.querySelector("#ul");

// let arr = [];

// async function getData() {
//   const querySnapshot = await getDocs(collection(db, "todo"));
//   querySnapshot.forEach((doc) => {
//     arr.push({ ...doc.data(), id: doc.id });
//     console.log(doc.data());
//   });

//   render();
// }

// getData();


// function render() {
//   if (arr.length === 0) {
//     ul.innerHTML = `<p class="mt-6 no-item">No Todo Found....</p>`;
//     return;
//   }

//   ul.innerHTML = "";

//   arr.map((item) => {
//     ul.innerHTML += `<li class="todo-item mt-6 ">
//             <span class="todo-text">${item.todo}</span>
//             <div class="todo-actions">
//                 <button class="todo-edit-btn edit-btn"><i class="fas fa-edit"></i> Edit</button>
//                 <button class="todo-delete-btn delete-btn"><i class="fas fa-trash"></i> Delete</button>
//             </div>
//         </li>`;
//   });

//   const deleteBtn = document.querySelectorAll(".delete-btn");
//   const editBtn = document.querySelectorAll(".edit-btn");

//   deleteBtn.forEach((btn, index) => {
//     btn.addEventListener("click", async () => {
//       await deleteDoc(doc(db, "todo", arr[index].id));
//       arr.splice(index, 1);

//       render();
//     });
//   });

//   editBtn.forEach((btn, index) => {
//     const updateTodo = doc(db, "todo", arr[index].id);

//     btn.addEventListener("click", async () => {
//       let updatedValue=prompt('enter Updated value')
//       await updateDoc(updateTodo, {
//         todo: arr[index].todo = updatedValue
//       });
//       render()
//     });
//   });
// }


// //Todo delete and edit button

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   try {
//     const docRef = await addDoc(collection(db, "todo"), {
//       todo: todo.value,
//     });

//     console.log("Document written with ID: ", docRef.id);
//     arr.push({
//       todo: todo.value,
//       id: docRef.id,
//     });
//     render();
//     todo.value = "";
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// });


















// const form = document.querySelector("#form");
// const todo = document.querySelector("#todo");
// let arr = [] 

// async function getData() {
//   const querySnapshot = await getDocs(collection(db, "todos"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
// }

// console.log(getData());
// form.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   console.log(todo.value);
//   try {
//     const docRef = await addDoc(collection(db, "todos"), {
//       todo : todo.value,
//     });
// arr.push({
// todo:todo.value,
// id: docRef.id,
// })
// console.log(arr);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// });