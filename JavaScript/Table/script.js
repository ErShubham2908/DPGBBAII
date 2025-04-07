// let tableData = document.getElementById("field");
// let btn = document.getElementsByTagName('button')
// console.log(btn);


// btn[0].addEventListener('click', () => {
    // console.log(parseInt(tableData.value));
    // for(let i = 1 ; i <= 10 ; i++){
        // console.log(tableData.value, " * ", i, " = ", tableData.value*i);
        // console.log(`${tableData.value} * ${i} = ${tableData.value *i }`);
    // }
// })

// string literal - ES6

// for loop
// for(intial value ; condition ; step)
// we have initial and final value

// for(let i = 1 ;  i <= 100 ; i++){
    // if(i % 2 !== 0){
        // console.log(i);
    // }
    // else{
    //     console.log(i);
        
    // }
// }



// while loop
// while(true){
//     // loop
// }
// do while

// let abc = 653;
let i = 0;
// let sum = 0;
while(i <= 5){
    // if(i % 3 === 0){
    //     console.log(i);
    // }
    // i++

    // sum +=  i;
    // console.log("Sum: ", sum);
    // i++
    // console.log("i: ", i);

    
}

// let abc = 653;
// let sum= 0;

// while(abc > 0)
// {
//     let a = abc%10;
//     abc = parseInt(abc/10);
//     sum = sum+a;
// }

// console.log(sum);
// for of
// for in

let abc = 653;
let sum = 0;

while (abc > 0) {
    let a = abc % 10;
    abc = parseInt(abc / 10);
    sum = sum + a;
}

console.log(sum);