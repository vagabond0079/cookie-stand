console.log('Am I working?');
//this is not a constructor. it's a function that returns an object.

function groceryList(){
  var list = {};
  list.title = title;

  return list;
};

//when we make a constructor we treat the object's context as the thing being created. You're adding things to this.object, rather than creating variables.

function GroceryItem(name){
  this.name = name;
  this.price = Math.floor(Math.random * 50 + 50);

}

function GroceryList(title, author){
  this.title = title;
  this.date = new Date();
  this.author = author;
  this.items = [];

  // this.addItem = function(item){  //not good practice.
  //   this.items.push(item);
};

// only add methods to a constructor's prototype. Add them outside the constructor.
GroceryList.prototype.addItem = function (itemName){
  this.items.push(new GroceryItem(itemName));
};

//convert an array of names to an array of GroceryItems
GroceryList.prototype.addItems = function (itemNames){
  var groceryItems = [];
  for (var i = 0; i < itemNames.length; i++){
    var item;
    item = new GroceryItem(itemNames[i]);
    groceryItems.push(item);
  }
  this.items = this.items.concat(items);
};

GroceryList.prototype.getTable = function(){
  var table = document.createElement('table');

  var titleRow = document.createElement('tr');
  titleRow.textContent = this.title;
  table.appendChild(titleRow);

  var itemRow, itemName, itemPrice;
  //create a new row for each item and add it to the table.
  for(var i = 0; i < this.items.length; i++){
    itemRow = document.createElement('tr');
    itemName = document.createElement('td');
    itemPrice = document.createElement('td');
    itemName.textContent = this.items[i].name;
    itemPrice.textContent = this.items[i].price;
    itemRow.appendChild(itemName)
    itemRow.appendChild(itemPrice);
    table.appendChild(itemRow);
  }

  return table
};

var xmas = new GroceryList('xmas', 'slugbyte');
xmas.addItem('eggs');
xmas.addItem('beans');
console.log(xmas);

var app = document.getElementById('app');
var xmasTable = xmas.getTable(); console.log(xmasTable);

app.appendChild(xmasTable);

var halloween = new GroceryList('halloween', 'slugbyte');
halloween.addItem('unicorn');
halloween.addItem('unibeans');
console.log(halloween);

var easter = new GroceryList('easter', 'slugbyte');
console.log(easter);

// var groceryList = {
//   title: 'xmas dinner',
//   date: new Date(),
//   items: [
//     'eggs',
//     'milk'
//   ],
// };

// var groceryList = {
//   title: 'holloween dinner',
//   date: new Date(),
//   items: [
//     'candy',
//     'spiders'
//   ],
// };
