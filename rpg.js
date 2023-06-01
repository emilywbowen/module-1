const readline = require("readline-sync");
const username = readline.question("WHOA!! I DON'T KNOW YOU! WHO ARE YOU? ");

console.log("Sorry to have reacted with such shock! I rarely see people around this area... anyway, it's nice to meet you " + username + "! Let's go on an adventure! I promise you won't be babysitting an evil ring or anything like that...")

let option

// let hp = 2

let adventurer = {
    name: username,
    hp: 500,
    attackPower: 50,
    inventory: []
}

const enemyArray = [
    {
        name: "FleaZilla",
        hp: 50,
        attackPower: 20,
        specialItem: "keyboard"
    },
    {
        name: "zombie shoe",
        hp: 100,
        attackPower: 30,
        specialItem: "money"
    }, 
    {
        name: "exploded diaper",
        hp: 150,
        attackPower: 50,
        specialItem: "baby"
    },
    {
        name: "rabid quokka...how cute, though!",
        hp: 200,
        attackPower: 75,
        specialItem: "ring"
    }
]

function rollTime(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
    // let number = result here
}
// console.log(rollTime(1, 4))

// function walk(){
//     const fight = prompt("(f) to fight, (i) for inventory, (r) for run")
//     if(runAway === "r"){
//         run()
//     } else if(inventory === "i"){
//         checkInv()
//     } else if(fightEnemy === "f"){
//         attack()
//     } else {
//         console.log("What are you going to do? Just sit there and die??")
//     }
// }

// const escape = true

// function run(){
//     if(escape === false){
//         console.log("NONE SHALL PASS! Now you must fight!")
//     } else if(attack) {
//         // attack()
//         console.log("You fight" + enemy + "and" + winner + "!")
//     } else{
//         console.log("You run away!")
//     }
// }

// function checkInv(){
//     if(checkInv === true){
//         console.log("You have" + inventory + "in your bag.")
//     } else{
//         console.log("You keep using that button, but I don't think it means what you think it means.")
//     }
// }

/*function enemyAttack(){
    // call the enemy generator function here
    if(rollTime(1, 4) < 4){
        // insert rollTime here to determine what monster.
        console.log("You fight " + enemy + " and you win!")
    }
    else{
        console.log("You fight " + enemy + " and " + enemy + " wins!")
    }
}*/

while(adventurer.hp > 0 && enemyArray.length > 0){
    var enemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
   const option = readline.keyIn( "You see a path ahead. What do you do? (w) walk, (s) stand, (p) check player information, (q) give up completely you loser.");
    if(option === "w"){
        if(rollTime(1, 4) < 4){
            // attack
           while(adventurer.hp > 0 && enemy.hp > 0){
            console.log("while loop")
            const attackOption = readline.keyIn("You see" + enemy.name + "! What do you do? (r) run away or (a) attack?");
            if(attackOption === "a"){
                console.log(`You attack ${enemy.name} and hit for ${adventurer.attackPower} attack power.`) 
                enemy.hp -= adventurer.attackPower
            } else {
                console.log(`You run away from ${enemy.name}, you pansy.`)
                break
            }
            
           }

           if(adventurer.hp <= 0){
            console.log(`You were defeated by ${enemy.name}!`)
            break
           }else if(enemy.hp<=0){
            console.log(`You beat ${enemy.name}!`)
            adventurer.hp = 500
            enemyArray.splice(enemyArray.indexOf(enemy), 1)
            console.log(`You found ${enemy.specialItem} and added to your inventory.`)
            adventurer.inventory.push(enemy.specialItem)
           }
        
        }else{
            console.log("Great! you moved 3 of spaces. Now what? (w) walk, (s) stand, (p) check player information, (q) give up completely you loser.")
        }
    } else if(option === "s"){
        console.log("Why are you just standing there? Do something!")
        // stand?
    } else if(option === "p"){
        console.log(adventurer)
        // check player?
    } else if(option === "q"){

        console.log("I guess you just don't have what it takes. Dude, I am disappointed in you.")
        break
        // give up?
    } else{
        console.log("You must be blind...that wasn't an option...")
    }
// if quitting, then console "winners don't quit, you poser"
    }
if (adventurer.hp > 0){
    console.log("You won, yay!")
}
