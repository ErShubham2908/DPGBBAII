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
// let a = "DPG College";
// let b = "25"
// let c = 'Data'

// Number
// let d = 2025
// 
// console.log(a);
// console.log(d);

// boolean
// true or false
// let e = true
// let f = false

// let g;
// console.log(g);

// Null
// let i = null

// Non-Premitive Datatype
// Object

// const ObjectName = {
//     // key : Value
//     name : "DPG",
//     year : 2025,
//     passYear : 2028
// }

// console.log(ObjectName.passYear);

// Array - index form 
            // 0,1,2,3,4,5
// const array1 = [1,2,3,4,5, "DPG"];

// console.log(array[5]);

// Function 
// 6 - 7
// function Abc(array){
//     for(let i = 0 ; i < array.length ; i++){
//         console.log(array[i]);       
//     }
// }
// Abc(array1)

// let num1 = Number(prompt("Enter First Number: "));
// let num2 = Number(prompt("Enter First Number: "));

// console.log(typeof(num1));

// function Sum(num1, num2){
//     console.log(num1 + num2);
// }

// Sum(num1, num2)

// JavaScript Day 2 - Code

// Arithmetic Operators

// let a = 10, b = 3;
// console.log("Add:",a + b); // Output: 13
// console.log("Sub:",a - b); // Output: 7
// console.log("Multi: ",a * b); // Output: 30
// console.log("Divid:",a / b); // Output: 3.3333
// console.log("Mode:",a % b); // Output: 1
// console.log("Power: ",a ** b); // Output: 1000

// 2. Assignment Operators

// let x = 10;
// x += 5; // x = x + 5 (x becomes 15)
// console.log(x);
// x *= 2; // x = x * 2 (x becomes 30)
// console.log(x); // Output: 30
// x -= 10;
// x = x - 10;
// console.log(x); //20


// logical Operator
// 1. And operator

// let a = true;
// let b = false;
// let c = 10;
// let e  = 12;
// let d = "10";
// console.log(a && b); //false
// console.log(a || b); // true
// console.log(!a); // false


// console.log(c != d); // true
// console.log(c !== d); // false

// console.log(c > e);
// console.log(c < e);


// let a = 10;
// let b = 11;
// let c = 10;

// console.log(a >= c); 
// console.log(a >= b); 
// console.log(a <= c); 
// console.log(a >= c); 

// age >= 18 ? "Able to Vote" : "Not able to Vote"

// let age = Number(prompt("Enter Your Age: "));
// if(age >= 18){
//     console.log("Hey !!!!!");
// }else{
//     console.log("Sorry!!!");    
// }

let marks = Number(prompt("Enter Your %: "))
if(marks >= 90){
    console.log("A+");    
}else if(marks > 80 && marks < 90){
    console.log("A");
}else{
    console.log("Failed....")
}