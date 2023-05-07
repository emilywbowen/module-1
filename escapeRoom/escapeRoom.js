const readline = require("readline-sync");
const name = readline.question("What is your name? ");

console.log("Hey " + name + "! IT'S A TRAP!!");

let option

let tryAgain = true

let foundKey = false

while (tryAgain){
    option = readline.keyIn("What would you like to do? (f) Find the key, (o) open the door, or (s) stick your hand in the weird hole over there?");
    if(option === "f"){
        if(foundKey === true){
            console.log("Did you want an award for finding the most keys or something?")
        } else{
            console.log("You hold a strange key covered in goo...")
            foundKey = true}
    } else if(option === "o"){
        tryAgain = false
        console.log("You've escaped! Yay.")
    } else if(option === "s"){
        tryAgain = false
        console.log("A sharpened candy cane stabs your hand and you die from diabeetus. Good job. What a sweet way to oof.")
    } else (
        console.log("Duuuuuuuuuuude......*face palm* Shoulda had a v8...")
    )

}