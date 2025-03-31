// console.log("Welcome to JS Lecture")

// Variable in JS
// way to create  variable in JS (keywpod)

// var keyword //(before ES6)
// let keyword //(ES6)
// const keyword // (ES6)

/* let age = 25;
let year = 2025
let name = "Shubham Kumar"
console.log(age); */
// Premitive Data Type
// let name = prompt("Enter A Number: ");
// console.log(name);
// String
let a = "DPG College";
let b = "25"
let c = 'Data'

// Number
let d = 2025

// console.log(a);
// console.log(d);

// boolean
// true or false
let e = true
let f = false

let g;
// console.log(g);

// Null
let i = null

// Non-Premitive Datatype
// Object

const ObjectName = {
    // key : Value
    name : "DPG",
    year : 2025,
    passYear : 2028
}

// console.log(ObjectName.passYear);

// Array - index form 
            // 0,1,2,3,4,5
const array1 = [1,2,3,4,5, "DPG"];

// console.log(array[5]);

// Function 
// 6 - 7
function Abc(array){
    for(let i = 0 ; i < array.length ; i++){
        console.log(array[i]);       
    }
}
// Abc(array1)

let num1 = Number(prompt("Enter First Number: "));
let num2 = Number(prompt("Enter First Number: "));

// console.log(typeof(num1));

function Sum(num1, num2){
    console.log(num1 + num2);
}

Sum(num1, num2)