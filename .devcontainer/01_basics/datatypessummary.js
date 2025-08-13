//JavaScript is dynamically typed while TypeScript is statically typed
// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 3456277324927363n



//Reference (Non primitive)

//Arrays, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "unnati",
    age: 20,
}
    
const myFunction = function(){
   console.log("Hello world!"); 
}

// console.log(typeof bigNumber);
console.log(typeof myFunction);
