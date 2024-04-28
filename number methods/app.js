// round
// let num = 2.5789
// console.log(Math.round(num));
// Math.round mai jis tha math mai round hota hai use trha round hoga lekin agr pooint kai baad 5 hai tou round hokar woh ik bara show hoga jaise 2 .5 hai tou 3 ho jaiga 

// floor
// console.log(Math.floor(num))
// iss mai point kai baad wala num chota ho ya bara ho jaise agrr 2.7 hai tou is mai 2 hi rhai ga 3 nhi hoga jabka yr round hokar 3 banta hai 

// ceil
// console.log(Math.ceil(num))
// iss mai point kai baad wala num chota ho ya bara ho jaise agrr 2.3 hai tou is mai 3 ho jaiga ga jabka ye round hokar 2 banta hai 

// round
// console.log(Math.random())
// iss se koi bhi number randomly generate hoga

// console.log(Math.ceil(Math.random()*2));




// TOSS LOGIC AGAIN
const para = document.querySelector("p")
const img  = document.querySelector("img")

function toss (Btn) {
    console.log('toss' , Btn);
    const logic = Math.ceil(Math.random()*2)
    console.log(logic);

    if ( Btn === 'heads'  && logic === 1  ||   Btn === 'tails' && logic === 2) {
para.innerHTML ="You Won a toss"
    } else {
        para.innerHTML ="You Lost"
    }

    if (logic === 1 ) {
        img.src="https://en.numista.com/catalogue/photos/pakistan/725-original.jpg"
    } else {
        img.src="https://thumbs.dreamstime.com/b/pakistani-rupees-coin-white-background-87280619.jpg"
    }
}


console.log(para.innerHTML);






