// primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol BigInt


// Reference (npn primitive)

const score = 100;

const scoreValue = 100.4;

const loggedIn = false;

const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const Bignumbert = 12345678n;

// Array, Object, functions

const heros = ["saktiman", "naagraj", "doga"];

let myobj = {

    name: "Ishant",
    age : 19
};


const myFunction = function() {

console.log("Hello world");
}