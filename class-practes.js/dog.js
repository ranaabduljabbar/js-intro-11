const Animal = require("./animal.js");
 class Dog extends Animal{
    constructor(nickName, age, furColor){
        super(nickName, age, furColor);
        this.itBrack = true;
        this.type = 'canine';
    }
 }
 module.exports = Dog;
