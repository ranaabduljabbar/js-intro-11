const Dog = require("./dog.js");
const Cat = require("./cat.js");


const pippo = new Dog("Pippo", 4, "black");
console.log(pippo);
const sam = new Cat("sam", 5, "black");
console.log(sam);

pippo.eat();
pippo.walk();
console.log(`FoodQtty left (${pippo.nickname}):`, pippo.foodQtty);
console.log(`Energy Level (${pippo.nickname}):`, pippo.energyLevel);