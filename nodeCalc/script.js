// //const readline = require("readline-sync")
// var readlineSync = require('readline-sync');
// var userName = readlineSync.question("Who are you? ");
// console.log("Hey " + userName +"!");

// const firstNumber = readlineSync.question("What is your first number? ");
// console.log(firstNumber);

// const secondNumber = readlineSync.question("What is your second number? ");
// console.log(secondNumber);

// const operations = ["add", "sub", "mul", "div"];

// const selectOperation = readlineSync.keyInSelect(operations, "Do you want to add, sub, mul, or div? ");

// function addNum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }
// function subNum(firstNumber, secondNumber) {
//     return firstNumber - secondNumber
// }
// function mulNum(firstNumber, secondNumber) {
//     return firstNumber * secondNumber
// }
// function divNum(firstNumber, secondNumber) {
//     return firstNumber / secondNumber
// }

// if(selectOperation === 0) {
//     addNum(firstNumber, secondNumber);
// }else if(selectOperation === 1) {
//     subNum(firstNumber, secondNumber);
// }else if(selectOperation === 2) {
//     mulNum(firstNumber, secondNumber);
// }else if(selectOperation === 3){
//     divNum(firstNumber, secondNumber);
// }else{
//     console.log("ABORT MISSION!");
// }
// // if(key === "a") {
//     console.log(firstNumber + secondNumber);
//     }
// else if (key === "s") {
//     console.log(firstNumber - secondNumber);
//     }
    
//     else if (key === "m") {
//     console.log(firstNumber * secondNumber);
// }
//     else if (key === "d") {
//     console.log(firstNumber / secondNumber);
// }
//console.log("You chose " + operation +"! Please wait!");

//const readline = require("readline-sync")
var readlineSync = require('readline-sync');
var userName = readlineSync.question("Who are you? ");

console.log("Hey " + userName +"! Let's do some math!");



const operations = ["add", "sub", "mul", "div"];

const selectOperation = readlineSync.keyInSelect(operations, "Do you want to add, sub, mul, or div? ");

function addNum(firstNumber, secondNumber) {
    //return ("The result is: "+ (firstNumber + secondNumber))
    console.log("The sum is : " + (firstNumber + secondNumber));
}
function subNum(firstNumber, secondNumber) {
    console.log("The difference is: "+ (firstNumber - secondNumber))
}
function mulNum(firstNumber, secondNumber) {
    console.log("The product is: "+ (firstNumber * secondNumber))
}
function divNum(firstNumber, secondNumber) {
    console.log ("The quotient is: "+ (firstNumber / secondNumber))
}

if(selectOperation === 0) {
    addNum(firstNumber, secondNumber);
}else if(selectOperation === 1) {
    subNum(firstNumber, secondNumber);
}else if(selectOperation === 2) {
    mulNum(firstNumber, secondNumber);
}else if(selectOperation === 3){
    divNum(firstNumber, secondNumber);
}else{
    console.log("ABORT MISSION!");
}
// if(key === "a") {
//     console.log(firstNumber + secondNumber);
//     }
// else if (key === "s") {
//     console.log(firstNumber - secondNumber);
//     }

//     else if (key === "m") {
//     console.log(firstNumber * secondNumber);
// }
//     else if (key === "d") {
//     console.log(firstNumber / secondNumber);
// }
//console.log("You chose " + operation +"! Please wait!");