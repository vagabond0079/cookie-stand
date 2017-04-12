'use strict';

var hoursOfOperation = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

function CookieShop(shopLoc, minCust, maxCust, avgCookiePerCust){
  this.shopLoc = shopLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.totalCustEachHour = [];
  this.totalCookiesPerHour = [];
  this.totalStaffPerHour = [];
}

CookieShop.prototype.randomCust = function() {
  for( var i = 14; i > 0; i--) {
    this.totalCustEachHour.push ((Math.floor (Math.random() * (this.maxCust - this.minCust + 1))) + this.minCust);
  }
};

CookieShop.prototype.cookiesPerHour = function() {
  for( var i = 0; i < this.totalCustEachHour.length; i++) {
    this.totalCookiesPerHour.push (Math.floor (this.totalCustEachHour[i] * this.avgCookiePerCust));
    this.totalStaffPerHour.push (Math.ceil (this.totalCookiesPerHour[i]/20));
  }
};

CookieShop.prototype.salesReportTableRows = function() {
  var newEl = document.createElement('tr');
  newEl.id = this.shopLoc + ' row';
  var position = document.getElementById('salesReportTable');
  position.appendChild(newEl);

  newEl = document.createElement('th');
  var newText = document.createTextNode(this.shopLoc);
  newEl.appendChild(newText);
  position = document.getElementById(this.shopLoc + ' row');
  position.appendChild(newEl);

  var total = 0;
  for( var i in this.totalCookiesPerHour) {
    total += this.totalCookiesPerHour[i];
  }

  this.totalCookiesPerHour.push(total);

  for (i = 0; i <= hoursOfOperation.length; i++){
    newEl = document.createElement('td');
    // newEl.id = 'countMe '+ i;
    newText = document.createTextNode(this.totalCookiesPerHour[i]);
    newEl.appendChild(newText);
    position = document.getElementById(this.shopLoc + ' row');
    position.appendChild(newEl);
  }

  CookieShop.prototype.staffReportTableRows = function() {
    var newEl = document.createElement('tr');
    newEl.id = this.shopLoc + ' row Staff';
    var position = document.getElementById('staffReportTable');
    position.appendChild(newEl);

    newEl = document.createElement('th');
    var newText = document.createTextNode(this.shopLoc);
    newEl.appendChild(newText);
    position = document.getElementById(this.shopLoc + ' row Staff');
    position.appendChild(newEl);

    var total = 0;
    for( var i in this.totalStaffPerHour) {
      total += this.totalStaffPerHour[i];
    }

    this.totalStaffPerHour.push(total);
    
    for (i = 0; i <= hoursOfOperation.length; i++){
      newEl = document.createElement('td');
      // newEl.id = 'countMe '+ i;
      newText = document.createTextNode(this.totalStaffPerHour[i]);
      newEl.appendChild(newText);
      position = document.getElementById(this.shopLoc + ' row Staff');
      position.appendChild(newEl);
    }
  };
};

var cookieShopFirstPike = new CookieShop('First and Pike', 23, 65, 6.3);
var cookieShopSeatacAirport = new CookieShop('Seatac Airport', 3, 24, 1.2);
var cookieShopSeattleCenter = new CookieShop('Seattle Center', 11, 38, 3.7);
var cookieShopCapitolHill = new CookieShop('Capitol Hill', 20, 38, 3.2);
var cookieShopAlki = new CookieShop('Alki', 2, 16, 4.6);

var cookieShops = [cookieShopFirstPike, cookieShopSeatacAirport, cookieShopSeattleCenter, cookieShopCapitolHill, cookieShopAlki];

for(var i = 0; i < cookieShops.length; i++) {
  cookieShops[i].randomCust();
  cookieShops[i].cookiesPerHour();
}
console.log(cookieShops);

function salesReportTableHead (){
  var newEl = document.createElement('table');
  newEl.id = 'salesReportTable';
  var position = document.getElementById('bodySales');
  position.appendChild(newEl);

  newEl = document.createElement('thead');
  newEl.id = 'colHeaders';
  position = document.getElementById('salesReportTable');
  position.appendChild(newEl);

  newEl = document.createElement('tr');
  newEl.id = 'colHeadersRow';
  position = document.getElementById('colHeaders');
  position.appendChild(newEl);

  newEl = document.createElement('th');
  position = document.getElementById('colHeadersRow');
  position.appendChild(newEl);

  for (var i = 0; i < hoursOfOperation.length; i++){
    newEl = document.createElement('th');
    var newText = document.createTextNode(hoursOfOperation[i]);
    newEl.appendChild(newText);
    position = document.getElementById('colHeadersRow');
    position.appendChild(newEl);
  }

  newEl = document.createElement('th');
  newText = document.createTextNode('Daily Location Total');
  newEl.appendChild(newText);
  position = document.getElementById('colHeadersRow');
  position.appendChild(newEl);
}

var cookieTotalsPerHourAllShops = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for(i = 0; i < hoursOfOperation.length; i++){
  cookieTotalsPerHourAllShops[i] = cookieTotalsPerHourAllShops[i] + cookieShops[0].totalCookiesPerHour[i]+ cookieShops[1].totalCookiesPerHour[i] + cookieShops[2].totalCookiesPerHour[i] + cookieShops[3].totalCookiesPerHour[i] + cookieShops[4].totalCookiesPerHour[i];
}

var total = 0;
for( i in cookieTotalsPerHourAllShops) {
  total += cookieTotalsPerHourAllShops[i];
}

cookieTotalsPerHourAllShops.push(total);

console.log(cookieTotalsPerHourAllShops);

function salesReportTableFoot (){
  var newEl = document.createElement('tfoot');
  newEl.id = 'colTotals';
  var position = document.getElementById('salesReportTable');
  position.appendChild(newEl);

  newEl = document.createElement('tr');
  newEl.id = 'colTotalsRow';
  position = document.getElementById('colTotals');
  position.appendChild(newEl);

  newEl = document.createElement('th');
  var newText = document.createTextNode('Totals:');
  newEl.appendChild(newText);
  position = document.getElementById('colTotalsRow');
  position.appendChild(newEl);

  for (var i = 0; i <= hoursOfOperation.length; i++){
    newEl = document.createElement('td');
    newText = document.createTextNode(cookieTotalsPerHourAllShops[i]);
    newEl.appendChild(newText);
    position = document.getElementById('colTotalsRow');
    position.appendChild(newEl);
  }
}

//Stretch Goal: Second Table for staff needs.

function staffReportTableHead (){
  var newEl = document.createElement('table');
  newEl.id = 'staffReportTable';
  var position = document.getElementById('bodySales');
  position.appendChild(newEl);

  newEl = document.createElement('thead');
  newEl.id = 'colHeadersStaff';
  position = document.getElementById('staffReportTable');
  position.appendChild(newEl);

  newEl = document.createElement('tr');
  newEl.id = 'colHeadersRowStaff';
  position = document.getElementById('colHeadersStaff');
  position.appendChild(newEl);

  newEl = document.createElement('th');
  position = document.getElementById('colHeadersRowStaff');
  position.appendChild(newEl);

  for (var i = 0; i < hoursOfOperation.length; i++){
    newEl = document.createElement('th');
    var newText = document.createTextNode(hoursOfOperation[i]);
    newEl.appendChild(newText);
    position = document.getElementById('colHeadersRowStaff');
    position.appendChild(newEl);
  }

  newEl = document.createElement('th');
  newText = document.createTextNode('Total Staff Hours');
  newEl.appendChild(newText);
  position = document.getElementById('colHeadersRowStaff');
  position.appendChild(newEl);
}

function staffReportTableFoot (){
  var newEl = document.createElement('tfoot');
  newEl.id = 'colTotalsStaff';
  var position = document.getElementById('staffReportTable');
  position.appendChild(newEl);

  newEl = document.createElement('tr');
  newEl.id = 'colTotalsRowStaff';
  position = document.getElementById('colTotalsStaff');
  position.appendChild(newEl);

  newEl = document.createElement('th');
  var newText = document.createTextNode('Totals:');
  newEl.appendChild(newText);
  position = document.getElementById('colTotalsRowStaff');
  position.appendChild(newEl);

  for (var i = 0; i <= hoursOfOperation.length; i++){
    newEl = document.createElement('td');
    newText = document.createTextNode(cookieTotalsPerHourAllShops[i]);
    newEl.appendChild(newText);
    position = document.getElementById('colTotalsRowStaff');
    position.appendChild(newEl);
  }
}
salesReportTableHead(cookieShops);

for(i = 0; i < cookieShops.length; i++){
  cookieShops[i].salesReportTableRows();
}

salesReportTableFoot();

staffReportTableHead();

for(i = 0; i < cookieShops.length; i++){
  cookieShops[i].staffReportTableRows();
}

staffReportTableFoot();
