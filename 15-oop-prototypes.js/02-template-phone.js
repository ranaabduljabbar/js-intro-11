function Phone(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }

  // add prototype = methods
  phone .prototype.call =function(){
    
  }
  const phone1 = new Phone('iPhone', 'Purple', 1000);
  const phone2 = new Phone('Samsung', 'Blue', 1200);
  const phone3 = new Phone('Nokia', 'Black', 750);