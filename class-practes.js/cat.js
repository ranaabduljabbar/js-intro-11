 const Animal = require("./animal.js");
 class Cat extends Animal{
    constructor(nickName, age, furColor){
        super(nickName, age, furColor);
        this.itBrack = false;
        this.type = 'feline';
    }
 }
 module.exports = Cat;
