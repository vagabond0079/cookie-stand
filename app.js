'use strict';

var hoursOfOperation = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

function CookieShop(shopLoc, minCust, maxCust, avgCookiePerCust){
  this.shopLoc = shopLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.totalCustEachHour = [];
  this.totalCookiesPerHour = [];
}

CookieShop.prototype.randomCust = function() {
  for( var i = 14; i > 0; i--) {
    this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
  }
};

CookieShop.prototype.cookiesPerHour = function() {
  for( var i = 0; i <= 13; i++) {
    this.totalCookiesPerHour.push (Math.floor (this.totalCustEachHour[i] * this.avgCookiePerCust));
  }
};

var cookieShopFirstPike = new CookieShop('First and Pike', 23, 65, 6.3);
var cookieShopSeatacAirport = new CookieShop('Seatac Airport', 3, 24, 1.2);
var cookieShopSeattleCenter = new CookieShop('Seattle Center', 11, 38, 3.7);
var cookieShopCapitolHill = new CookieShop('Capitol Hill', 20, 38, 3.2);
var cookieShopAlki = new CookieShop('Alki', 2, 16, 4.6);

var cookieShops = [cookieShopFirstPike, cookieShopSeatacAirport, cookieShopSeattleCenter, cookieShopCapitolHill, cookieShopAlki];

//Adding a new <h2> element for each shop.

function newSalesReport(shopName, shopNumber) {
  var newEl = document.createElement('h2');
  var newText = document.createTextNode(shopName.shopLoc);
  newEl.appendChild(newText);
  var position = document.getElementsByTagName('div')[shopNumber - 1];
  position.appendChild(newEl);

  newEl = document.createElement('ul');
  newText = document.createTextNode('Daily Report: Cookies per Hour');
  newEl.appendChild(newText);
  position = document.getElementsByTagName('div')[shopNumber - 1];
  position.appendChild(newEl);

  for (var i = 0; i < 14; i++) {
    newEl = document.createElement('li');
    newText = document.createTextNode(hoursOfOperation[i] + ': ' + shopName.totalCookiesPerHour[i]);
    newEl.appendChild(newText);
    position = document.getElementsByTagName('ul')[shopNumber - 1];
    position.appendChild(newEl);
  }
  newEl = document.createElement('li');
  var total = 0;
  for(i in shopName.totalCookiesPerHour) { total += shopName.totalCookiesPerHour[i]; }
  newText = document.createTextNode('Total cookies sold today: ' + total);
  newEl.appendChild(newText);
  position = document.getElementsByTagName('ul')[shopNumber - 1];
  position.appendChild(newEl);
}

for(var i = 0; i < cookieShops.length; i++) {
  cookieShops[i].randomCust();
  cookieShops[i].cookiesPerHour();
}

console.log(cookieShops);

for(var j = 0; j < cookieShops.length; j++) {
  newSalesReport(cookieShops[j], j + 1);
}
