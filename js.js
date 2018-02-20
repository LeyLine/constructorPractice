function Item (name, price){
  this.name = name;
  this.price = price;
}

//prototype inheritance
function Fruit (name, price){
  Item.call(this, name, price);
  this.expiration = "tuesday";
  this.brand = "dole";
}
var myItem = new Item("orange", "39c");


// console.log(myItem.name);
// console.log(myItem);
//var myFruit = new Fruit("banana", "40");
//console.log(myFruit);

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
