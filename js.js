function Item (name, price){
  this.name = name;
  this.price = price;
}

var myItem = new Item("orange", "39c");

// console.log(myItem.name);
// console.log(myItem);


//Sharing behaviors through prototypes

function Item(name, price){
  this.name = name;
  this.price = price;
}

Item.prototype.calculatePrice = function() {
  console.log ("the price is " + (this.price - 0.05));
};

var ball = new Item('soccer ball', 15);
ball.calculatePrice();


var fruit = new Item('fruit', 10);
fruit.calculatePrice();
