//create a class called animal 

class Animal{
    constructor(nickname, age, furColor){
        this.nickname = nickname;
        this.age = age;
        this.furColor =furColor;
        this.foodQtty = 20;
        this. energyLevel = 100;
    }
    eat(){

      this.foodQtty -= 0.5;
    }
    sleep(){
        this.energyLevel = 100;
    }
    walk(){
        this.energyLevel -= 15;
    }
}
module.exports = Animal;