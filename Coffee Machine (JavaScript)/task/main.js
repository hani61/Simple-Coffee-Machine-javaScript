// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

// console.log(`Starting to make a coffee
// Grinding coffee beans
// Boiling water
// Mixing boiled water with crushed coffee beans
// Pouring coffee into the cup
// Pouring some milk into the cup
// Coffee is ready!`);
// console.log("Write how many cups of coffee you will need:");
// let cups = Number(input());
// console.log("For " + cups + " cups of coffee you will need:");
// console.log(`${200 * cups} ml of water`);
// console.log(`${50 * cups} ml of milk`);
// console.log(`${15 * cups} g of coffee beans`);
// console.log("Write how many ml of water the coffee machine has:");
// let water = Number(input());
// console.log("Write how many ml of milk the coffee machine has:");
// let milk = Number(input());
// console.log("Write how many grams of coffee beans the coffee machine has:");
// let coffee = Number(input());
// console.log("Write how many cups of coffee you will need:");
// let currentCups = Number(input());
// let maxCups = (water1, milk1, coffee1) => {
//   return Math.min(Math.floor(water1 / 200), Math.floor(milk1 / 50), Math.floor(coffee1 / 15));
// }
// if (maxCups(water, milk, coffee) === currentCups) {
//   console.log( "Yes, I can make that amount of coffee");
// }
// else if (maxCups(water, milk, coffee) > currentCups) {
//   console.log( "Yes, I can make that amount of coffee (and even " + (maxCups(water, milk, coffee) - currentCups) + " more than that)");
// }
// else {
//   console.log("No, I can make only " + maxCups(water, milk, coffee) + " cups of coffee");
// }
let water = 400;
let coffee = 120;
let milk = 540;
let cups = 9;
let cocoa = 300;
let money = 550;

function getAction() {
  let action = setAction();
  if (action === "exit") {
    return false;
  }
  else if (action === "buy"){
    buyCoffee();
  }
  else if (action === "remaining") {
    display();
  }
  else if (action === "fill") {
    fillCoffee();
  }
  else if (action === "take") {
    takeMoney();
  }


}

function display(){
  console.log("The  coffee machine has:");
  console.log(water + " ml of water");
  console.log(milk + " ml of milk");
  console.log(coffee + " g of coffee beans");
  console.log(cups + " disposable cups");
  console.log("$"+money + " of money");
}

function getState() {
  if (coffee < 0 ) {
    console.log( "Sorry, not enough coffee beans!");
    return false;
  }
  else if (water < 0) {
    console.log( "Sorry, not enough water!");
    return false;
  }
  else if (milk < 0) {
    console.log( "Sorry, not enough milk!");
    return false;
  }
  else  if (cups < 0) {
    console.log( "Sorry, not enough cups!");
    return false;
  }
  else  {
    console.log( "I have enough resources, making you a coffee!");
    return true;
  }
}
function setAction() {
  console.log("Write action (buy, fill, take, remaining, exit):");
  return input();
}

function buyCoffee() {
  console.log( "What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino 4 - Hot Chocolate:");
  let drink = input();
  if  (drink === "back") {
    getAction();
  }
  else if (drink === "1") {
      cups -= 1;
      coffee -= 16;
      water -= 250;
      if (getState() === true) money += 4;
      else {
        cups += 1;
        coffee += 16;
        water += 250;
      }
  }
  else if (drink === "2") {
    cups -= 1;
    coffee -= 20;
    milk -= 75;
    water -= 350;
    if (getState() === true) money += 7;
    else {
      cups += 1;
      coffee += 20;
      milk += 75;
      water += 350;
    }

  }
  else if (drink === "3") {
    cups -= 1;
    coffee -= 12;
    milk -= 100;
    water -= 200;
    if (getState() === true) money += 6;
    else {
      cups += 1;
      coffee += 12;
      milk += 100;
      water += 200;
    }
  }
  else if (drink === "4") {
    cups -= 1;
    milk -= 200;
    water -= 200;
    cocoa -= 25;
    if (getState() === true) money += 8;
    else {
      cups += 1;
      milk += 200;
      water += 200;
      cocoa += 25;
    }
  }
}

function fillCoffee() {
  console.log("Write how many ml of water do you want to add:");
  water +=  Number(input());
  console.log( "Write how many ml of milk do you want to add:");
  milk += Number(input());
  console.log( "Write how many grams of coffee beans do you want to add:");
  coffee += Number(input());
  console.log("Write how many disposable cups of coffee do you want to add:");
  cups += Number(input());
  console.log( "Write how many grams of cocoa do you want to add:");
  cocoa += Number(input());
}

function takeMoney() {
  console.log("I gave you $" + money);
  money  = 0;
}

// program starts


let getCoffee;
do {
  getCoffee = getAction();
}
while (getCoffee !== false);








