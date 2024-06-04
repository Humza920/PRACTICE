// ARRAY METHODS
// 1. for in 
// 2. for of 
// 3. for each 
// 4. map 
// 5. filter 

const arr = ["apple" ,"mango" ,"banana" ,"orange" ,"grapes"]
const div = document.querySelector("div")
const user = {username: "Humza",
fathername: "Jalil",
standard: "12th"
}

// for in ----> objects par use hoga ye
// for (const key in user) {
    // console.log(key);
    // console.log(user[key]);
    // console.log(`${key} ===> ${user[key]}`);
// }

// for of ----> array kai liye use hoga
// for (const iterator of arr) {
//     console.log(iterator);
// }

// forEach
// const each = arr.forEach(item => {
//     console.log(item);
    // return item
// });
// console.log(each);

map
const mAp = arr.map(item => {
    console.log(item);
    return item
});
console.log(mAp);

NOTE: forEach or map me sirf ik frq hai map ka method return karaiga jabkai forEach kka nhi


