'use strict';

// calculate the number of cookies each location must make every day (in a file called sales.html)
//depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:
//The minimum number of customers per hour.
//The maximum number of customers per hour.
//The average number of cookies purchased per customer.

//add and remove locations from the daily projections report
//modify the input numbers for each location based on day of the week, special events, and other factors
//see these numbers with nice formatting in a web application

//design work and construction of a public-facing page (called index.html)
//color scheme and a custom font, and maybe additional images, for a public-facing webpage

var hoursOfOperation = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

var cookieShopFirstPike = {
  location: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  totalCustEachHour: [],
  totalCookiesPerHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
    };
    console.log(this.totalCustEachHour);
  },
  CookiesPerHour: function() {
    for( var i = 0; i <= 14; i++) {
      this.totalCookiesPerHour.push (Math.floor (this.totalCustEachHour[i] * this.avgCookiePerCust));
    };
    console.log(this.totalCookiesPerHour);
  },
};

var cookieShopSeatacAirport = {
  location: 'Seatac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  totalCustEachHour: [],
  totalCookiesPerHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
    };
    console.log(this.totalCustEachHour);
  },
  CookiesPerHour: function() {
    for( var i = 0; i <= 14; i++) {
      this.totalCookiesPerHour.push (Math.floor (this.totalCustEachHour[i] * this.avgCookiePerCust));
    };
    console.log(this.totalCookiesPerHour);
  },
};

var cookieShopSeattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookiePerCust: 63.7,
  totalCustEachHour: [],
  totalCookiesPerHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
    };
    console.log(this.totalCustEachHour);
  },
  CookiesPerHour: function() {
    for( var i = 0; i <= 14; i++) {
      this.totalCookiesPerHour.push (Math.floor (this.totalCustEachHour[i] * this.avgCookiePerCust));
    };
    console.log(this.totalCookiesPerHour);
  },
};

var cookieShopCapitolHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookiePerCust: 2.3,
  totalCustEachHour: [],
  totalCookiesPerHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
    };
    console.log(this.totalCustEachHour);
  },
  CookiesPerHour: function() {
    for( var i = 0; i <= 14; i++) {
      this.totalCookiesPerHour.push (Math.floor (this.totalCustEachHour[i] * this.avgCookiePerCust));
    };
    console.log(this.totalCookiesPerHour);
  },
};

var cookieShopAlki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookiePerCust: 4.6,
  totalCustEachHour: [],
  totalCookiesPerHour: [],
  randomCust: function() {
    for( var i = 15; i > 0; i--) {
      this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
    };
    console.log(this.totalCustEachHour);
  },
  CookiesPerHour: function() {
    for( var i = 0; i <= 14; i++) {
      this.totalCookiesPerHour.push (Math.floor (this.totalCustEachHour[i] * this.avgCookiePerCust));
    };
    console.log(this.totalCookiesPerHour);
  },
};

cookieShopFirstPike.randomCust();
cookieShopSeatacAirport.randomCust();
cookieShopSeattleCenter.randomCust();
cookieShopCapitolHill.randomCust();
cookieShopAlki.randomCust();

cookieShopFirstPike.CookiesPerHour();
cookieShopSeatacAirport.CookiesPerHour();
cookieShopSeattleCenter.CookiesPerHour();
cookieShopCapitolHill.CookiesPerHour();
cookieShopAlki.CookiesPerHour();

//Adding a new <h2> element for each shop.

function newSalesReport(shopName, shopNumber) {
  var newEl = document.createElement('h2');
  var newText = document.createTextNode(shopName.location);
  newEl.appendChild(newText);
  var position = document.getElementsByTagName('div')[shopNumber-1];
  position.appendChild(newEl);

  var newEl = document.createElement('ul');
  var newText = document.createTextNode('Daily Report: Cookies per Hour');
  newEl.appendChild(newText);
  var position = document.getElementsByTagName('h2')[shopNumber-1];
  position.appendChild(newEl);

  for (var i = 0; i < 15; i++) {
    var newEl = document.createElement('li');
    var newText = document.createTextNode(hoursOfOperation[i] + ': ' + shopName.totalCookiesPerHour[i] + ' cookies.');
    newEl.appendChild(newText);
    var position = document.getElementsByTagName('ul')[shopNumber-1];
    position.appendChild(newEl);
  }
};

newSalesReport(cookieShopFirstPike, 1);
newSalesReport(cookieShopSeatacAirport, 2);
newSalesReport(cookieShopSeattleCenter, 3);
newSalesReport(cookieShopCapitolHill, 4);
newSalesReport(cookieShopAlki, 5);


//Adding list item elements to ul.
