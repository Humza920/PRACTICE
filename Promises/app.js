// const totalAmout = 100000
// const picnic = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (totalAmout>=100000) {
//             console.log("Picnic done");
//             resolve("DONE")
//         } else {
//             console.log("Picnic not done");    
//             reject("Not done")
//         }
//     },1000 
// );
// })
// picnic.
// then((res)=>{
//     console.log(res)
// }).
// catch((err)=>{
// console.log(err)
// })

// const div = document.querySelector("div")

// axios('https://fakestoreapi.com/products').
// then((res)=>{
//     console.log(res.data); 
//     res.data.map((item)=>{
//         div.innerHTML+=`<h1>TITLE: ${item.title}<h1/>
//         <img width="300" src='${item.image}'/>
//         <h1>PRICE: ${item.price}<h1/>`
//     })
// })


// const bankBalance = 200000
// const shadi = new Promise((resolve, reject) => {
//     if (bankBalance>500000) {
//         // console.log("shadi manzoor hai");
//         resolve("shadi manzoor hai")
//     } else {
//         // console.log("aba nhi man rhai");
//         reject("aba nhi man rhai")
//     }
// })

// shadi
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })


function shadi (bankBalance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bankBalance>200000) {
                console.log("SHADI MUBARAK");
            } else {
                console.log("AMA NAI ZEHAR KHA LIA");
            }        
        }, 1000);
    })
}

shadi(100000)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})