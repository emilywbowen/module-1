const readline = require("readline-sync");
const username = readline.question("WHOA!! I DON'T KNOW YOU! WHO ARE YOU? ");

console.log(
  "Sorry to have reacted with such shock! I rarely see people around this area... anyway, it's nice to meet you " + username + "! Let's go on an adventure! I promise you won't be babysitting an evil ring or anything like that...");


let adventurer = {
  name: username,
  hp: 500,
  attackPower: 50,
  inventory: [],
};

const enemyArray = [
  {
    name: "FleaZilla",
    hp: 50,
    attackPower: 20,
    specialItem: "a wireless keyboard",
  },
  {
    name: "a zombie shoe",
    hp: 100,
    attackPower: 30,
    specialItem: " $20",
  },
  {
    name: "an exploded diaper",
    hp: 150,
    attackPower: 50,
    specialItem: "fresh clean baby",
  },
  {
    name: "a cute rabid quokka",
    hp: 200,
    attackPower: 75,
    specialItem: "Ring of Power",
  },
];

function rollTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(rollTime(1, 4))




while (adventurer.hp > 0 && enemyArray.length > 0) {
  var enemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
  const option = readline.keyIn("You see a path ahead. What do you do? (w) walk, (s) stand, (p) check player information, (q) give up completely you loser." );
  if (option === "w") {
    if (rollTime(1, 4) < 4) {
      while (adventurer.hp > 0 && enemy.hp > 0) {
        console.log("Let's fight!");
        const attackOption = readline.keyIn("You see " + enemy.name +  "! What do you do? (r) run away or (a) attack?");
        if (attackOption === "a") {
          console.log(`You attack ${enemy.name} and hit for ${adventurer.attackPower} attack power.`);
          enemy.hp -= adventurer.attackPower;
        } else if(attackOption === "r") {
          console.log(`You run away from ${enemy.name}, you pansy.`);
          break;
        } else {
            console.log("That wasn't an option, nimwad!")
        }
      }

      if (adventurer.hp <= 0) {
        console.log(`You were defeated by ${enemy.name}!`);
        break;
      } else if (enemy.hp <= 0) {
        console.log(`You beat ${enemy.name}!`);
        adventurer.hp = 500;
        enemyArray.splice(enemyArray.indexOf(enemy), 1);
        console.log(
          `You found ${enemy.specialItem} and added to your inventory.` );
        adventurer.inventory.push(enemy.specialItem);
      }
    } else {
      console.log(
        "Great! you moved 3 of spaces. Now what? (w) walk, (s) stand, (p) check player information, (q) give up completely you loser."
      );
    }
  } else if (option === "s") {
    console.log("Why are you just standing there? Do something!");
  } else if (option === "p") {
    console.log(adventurer);
  } else if (option === "q") {
    return
    console.log(
      "I guess you just don't have what it takes. Dude, I am disappointed in you."
    );
    break;
  } else {
    console.log("You must be blind...that wasn't an option...");
  }
}
if (adventurer.hp > 0) {
  console.log("You won, yay!");
}
