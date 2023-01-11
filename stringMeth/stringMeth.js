// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
var string = "heLLo"
function capAndLowHell(greeting){

var capHello = greeting.toUpperCase()


var lowHello = greeting.toLowerCase()

   
    return capHello.concat(lowHello)
}
// console.log(capAndLowHell(string))

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down. 
// Hint: You'll need to use Math.floor().

function findMiddleIndex(greeting){


var lengthOfHello = greeting.length

return Math.floor(lengthOfHello/2)
}
// console.log(findMiddleIndex("Hello"))
// console.log(findMiddleIndex("Hello World"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// original
// function longMiddle(middle){

// var findMidIndex = ("Hello World") // => 5

// var lengthOfHelloWorld = findMidIndex.length

// console.log(lengthOfHelloWorld)
//  length is 11
// return Math.floor(lengthOfHelloWorld/2)
// }
// console.log(longMiddle("middle"))

// can be cleaned by using this:
// function longMiddle(wazzup){
//     var length = wazzup.length
//     return Math.floor(length / 2)
// }

//  console.log(longMiddle("you can write any string here!"))

//  console.log(longMiddle('hello world'))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.

// returnFirstHalf("Hello") // => "He"

// returnFirstHalf("Hello World") // => "Hello"

function returnFirstHalf(greeting) {
  
    var livinOnAPrayer = findMiddleIndex(greeting)

    let result = greeting.slice(0, livinOnAPrayer)

    return result
  
}
// console.log(returnFirstHalf("Hello"))
// console.log(returnFirstHalf("Hello World"))


// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

// Hint: If your string length is odd, use Math.floor() to round down.

// capitalizeAndLowercase("Hello") // => "HEllo"
// capitalizeAndLowercase("Hello World") // => "HELLO world"

function capitalizeAndLowercase(greeting){

    let livinOnAPrayer = findMiddleIndex(greeting)

    let firstHalf = greeting.slice(0, livinOnAPrayer)

    let secondHalf = greeting.slice(livinOnAPrayer)

    var result = firstHalf.toUpperCase() + secondHalf.toLowerCase()

// ~~~~~~~~~~~~~ dirty code
    // var upperCase = firstHalf.toUpperCase()
    // var lowerCase = secondHalf.toLowerCase()

    // let result = upperCase + lowerCase
// ~~~~~~~~~~~ end of dirty code

    return result
}
console.log(capitalizeAndLowercase("there IS chOcoLATe on MY DEsk"))

// ### **Optional Code Challenge**

// (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.

// capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

