const readline = require("readline-sync");
const name = readline.question("WHOA!! I DON'T KNOW YOU! WHO ARE YOU? ");

console.log("Sorry to have reacted with such shock! I rarely see people around this area... anyway, it's nice to meet you " + name + "! Let's go on an adventure! I promise you won't be babysitting an evil ring or anything like that...")

let option

let hp = 100 

let s = stand
let w = walk
let r = run
let a = attack
let q = quit
let p = printInfo
// printInfo = player's name, HP, inventory

let evil1 = "FleaZilla" 
let evil2 = "zombie shoe"
let evil3 = "exploded diaper"
let evil4 = "rabid quokka...how cute, though!"

let loot1 = "evil ring...but, wait, I thought you said..."
let loot2 = "wireless keyboard? What??"
let loot3 = "fresh clean baby"
let loot4 = "money I guess"

let safe = true
let attack = false

function rollTime(min, max){
    let min = 0;
    let max = 4;
    return Math.floor(Math.random() * (max - min + 1) + min);
    // let number = result here
}

function walk(){
    const fight = prompt("(f) to fight, (i) for inventory, (r) for run")
    if(runAway === "r"){
        run()
    } else if(inventory === "i"){
        checkInv()
    } else if(fightEnemy === "f"){
        attack()
    } else {
        console.log("What are you going to do? Just sit there and die??")
    }
}

const escape = true

function run(){
    if(escape === false){
        console.log("NONE SHALL PASS! Now you must fight!")
    } else if(attack) {
        // attack()
        console.log("You fight" + enemy + "and" + winner + "!")
    } else{
        console.log("You run away!")
    }
}

function checkInv(){
    if(checkInv === true){
        console.log("You have" + inventory + "in your bag.")
    } else{
        console.log("You keep using that button, but I don't think it means what you think it means.")
    }
}

function attack(){
    if(attack === true){
        // insert rollTime here to determine what monster.
        console.log("You fight" + enemy + "and" + winner + "wins!")
    }
    else if(attack === false){
        console.log("I have no idea what I'm actually doing...")
    }
    else{
        console.log("Did your finger slip and hit that key by accident?")
    }
}

while(hp < 0){
    option = readline.keyInSelect("You see a path ahead. What do you do? (w) walk or (s) stand");
    if(option === "w"){
             // use rollTime
        } if(attack === false){  
            console.log("Great! you moved " + number + " of spaces. Now what? (w) walk or (s) stand");
            // nest the attack
           
        }
        
        else{

            console.log("Why are you just standing there? Do something!")
            }

        }
    }
}

// To roll random number 1-4:
// let min = 0;
// let max = 4;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//You will not get the same output
// 0
