// # **Preliminaries**

// 1. Write a for loop that prints to the console the numbers 0 through 9.
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// 2. Write a for loop that prints to the console 9 through 0.
// for (var i = 10; i > 0; i--) {
//     console.log(i)
// }

// 3. Write a for loop that prints these fruits to the console.`const fruit = ["banana", "orange", "apple", "kiwi"]`

// const fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// # **Bronze Medal**

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// const numArr = []
// for (var i = 0; i < 10; i++) {
//    numArr.push(i) 
//    console.log(numArr) 
// }


// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// const numArr = []
// for (var i = 0; i <= 100; i++) {
//     if (i % 2 === 0)
//     numArr.push(i)
// }
// console.log(numArr)

// 3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`
// const fruitArr = []
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i < fruit.length; i++){
//     if (i % 2 === 0)
//     fruitArr.push(fruit[i])
// }
// console.log(fruitArr)


// **Silver Medal**

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations  

// 1. Write a loop that will print out all the names of the people of the people array


// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.


// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".
// Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.
