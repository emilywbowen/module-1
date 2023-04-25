// Problem 1:
// Write a function that takes an array of numbers and returns the largest (without using Math.max())
// test data
function findLargest(number){
    let max = number[0];
    for(let i = 0; i < number.length; i++){
        let sample = number[i];
        if(sample > max){
            max = sample;
        }
    }
    return max;
}
// let arrayNum= [6, 13, 250, 3];
// let arrayNum= [3, 5, 8, 2, 1];
let arrayNum= [-13, 40, 3, 0, 19, 22];

let largest = findLargest(arrayNum);
// console.log(largest);
//// console.log(largest([6, 13, 250, 3)) // => 250
// console.log(largest([3, 5, 2, 8, 1])) // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40

// Problem 2:
// Write a function that takes an array of words and a character and returns each word that has that character present.
// var lettersWithStrings = ["$hello!", "%%^%%", "test!"];
      
// a = lettersWithStrings.includes("!")
// // Printing result of includes()
// console.log(a);

// let strings = ["$hello!", "%%^%%", "test!"]
// let strings = ["#3", "$$$", "C%4!", "Hey!"]
let strings = ["yellow", "green", "^up^", "down", "dog"]

function lettersWithStrings(myArray, searchCriteria) {
    return myArray.filter(function(item){
        return item.indexOf(searchCriteria) !==-1

})}

// console.log(lettersWithStrings(strings,"!"));

console.log(lettersWithStrings(strings, "h"));
// test data
// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")) git // => ["$hello!", "test!"]
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []

// Problem 3:
// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// test data
// console.log(isDivisible(4, 2)) // => true
// console.log(isDivisible(9, 3)) // => true
// console.log(isDivisible(15, 4)) // => false

function isDivisible(num1, num2){
    if ((num1 % num2) === 0){
        return true
    } 
    else {
        return false
    }
}

console.log(isDivisible(4, 2));
console.log(isDivisible(9, 3));
console.log(isDivisible(15, 4));