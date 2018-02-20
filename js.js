function Item (name, price){
  this.name = name;
  this.price = price;
}

var myItem = new Item("orange", "39c");

console.log(myItem.name);
console.log(myItem);
