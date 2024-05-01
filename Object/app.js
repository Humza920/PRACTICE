const div = document.querySelector("div")
const users = [
    {
        name: "Alice",
        age: 25,
        hobbies: ["Reading", "Painting"]
    },
    {
        name: "Bob",
        age: 30,
        hobbies: ["Playing guitar", "Cooking"]
    },
    {
        name: "Charlie",
        age: 22,
        hobbies: ["Hiking", "Photography"]
    },
    {
        name: "David",
        age: 28,
        hobbies: ["Running", "Watching movies"]
    },
    {
        name: "Ella",
        age: 35,
        hobbies: ["Traveling", "Knitting"]
    },
    {
        name: "Frank",
        age: 20,
        hobbies: ["Gaming", "Drawing"]
    },
    {
        name: "Grace",
        age: 27,
        hobbies: ["Singing", "Dancing"]
    },
    {
        name: "Hannah",
        age: 32,
        hobbies: ["Cooking", "Yoga"]
    },
    {
        name: "Ian",
        age: 24,
        hobbies: ["Playing football", "Reading"]
    },
    {
        name: "Jessica",
        age: 29,
        hobbies: ["Writing", "Cycling" , 'swimming']
    }
];

for (let i = 0; i < users.length; i++) {
console.log(users[i]);
div.innerHTML+=`<h2>Name:${users[i].name}</h2>
<h2>Age:${users[i].age}</h2><hr>`

}