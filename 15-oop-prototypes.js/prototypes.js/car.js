// creat a car clasee 
// and a construction which takes parameter: make, model, year, prices 
//Add 2 methods :drive, breake
//{make} {model} drives!
//{make} {model} breake !
class Car {
    constructor(make, model, year, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }
    drive() {
        console.log(`${this.make} ${this.model} drives!`);
    }
    brakes() {
        console.log(`${this.make} ${this.model} brakes!`);
    }
  }
  module.exports = Car;

