'use strict';

//===== Global Variables =====

var hoursOfOperation = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

//===== CookieShop Object Constructor =====

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
  for( var i = hoursOfOperation.length; i > 0; i--) {
    this.totalCustEachHour.push (Math.floor (Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

CookieShop.prototype.cookiesPerHour = function() {
  for( var i = 0; i < this.totalCustEachHour.length; i++) {
    this.totalCookiesPerHour.push (Math.floor (this.totalCustEachHour[i] * this.avgCookiePerCust));
  }
};

CookieShop.prototype.staffPerHour = function() {
  for( var i = 0; i < this.totalCustEachHour.length; i++) {
    this.totalStaffPerHour.push ( Math.max ( 2, (Math.ceil (this.totalCookiesPerHour[i]/20))));
  }
};

//===== Add CookieShop totalCookiesPerHour to salesReportTableRows =====



// ===== Add CookieShop totalStaffPerHour to staffReportTableRows =====

  CookieShop.prototype.staffReportTableRows = function() {
    var newEl = document.createElement('tr');
    newEl.id = this.shopLoc + ' row Staff';
    var position = document.getElementById('staffReportTable');
    position.appendChild(newEl);

    newEl = document.createElement('th');
    newEl.className = 'firstCol';
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

//===== Create Cookie Shops =====

var cookieShopFirstPike = new CookieShop('First and Pike', 23, 65, 6.3);
var cookieShopSeatacAirport = new CookieShop('Seatac Airport', 3, 24, 1.2);
var cookieShopSeattleCenter = new CookieShop('Seattle Center', 11, 38, 3.7);
var cookieShopCapitolHill = new CookieShop('Capitol Hill', 20, 38, 3.2);
var cookieShopAlki = new CookieShop('Alki', 2, 16, 4.6);

var cookieShops = [cookieShopFirstPike, cookieShopSeatacAirport, cookieShopSeattleCenter, cookieShopCapitolHill, cookieShopAlki];

for(var i = 0; i < cookieShops.length; i++) {
  cookieShops[i].randomCust();
  cookieShops[i].cookiesPerHour();
  cookieShops[i].staffPerHour();
}

//===== Get cookieTotalsPerHourAllShops =====

var cookieTotalsPerHourAllShops = [];

for(i = 0; i < cookieShops.length; i++){
  for(var j = 0; j < hoursOfOperation.length; j++){
    cookieTotalsPerHourAllShops[j] = cookieTotalsPerHourAllShops[j] + cookieShops[i].totalCookiesPerHour[j];
  }
}

var total = 0;
for( i in cookieTotalsPerHourAllShops) {
  total += cookieTotalsPerHourAllShops[i];
}

cookieTotalsPerHourAllShops.push(total);

//===== Create salesReportTable =====

function salesReportTable (cookieShops){

  //===== Create Table Header =====
  var salesReportTableEl = document.createElement('table');
  var tableWrap = document.getElementById('tableWrap');
  tableWrap.appendChild(salesReportTableEl);

  var colHeader = document.createElement('thead');
  salesReportTableEl.appendChild(colHeader);

  var colHeadersRow = document.createElement('tr');
  colHeaders.appendChild(colHeadersRow);

  var salesTopLeft = document.createElement('th');
  salesTopLeft.className = 'firstCol';
  salesTopLeft.className = 'topLeft';
  salesTopLeft.textContent('Daily Sales Report');
  colHeadersRow.appendChild(salesTopLeft);

  for (var i = 0; i < hoursOfOperation.length; i++){
    var salesHoursColHeader = document.createElement('th');
    salesHoursColHeader.textContent(hoursOfOperation[i]);
    colHeadersRow.appendChild(salesHoursColHeader);
  }

  var salesDailyTotalColHeader = document.createElement('th');
  salesDailyTotalColHeader.textContent('Daily Location Total');
  position = document.getElementById('colHeadersRow');
  colHeadersRow.appendChild(salesDailyTotalColHeader);

  //===== Create Table Data Rows =====

  for(i = 0; i < cookieShops.length; i++){
    cookieShops[i].salesReportTableRows();


  var salesTableRow = document.createElement('tr');
  var salesReportTable = document.getElementById('salesReportTable');
  salesReportTable.appendChild(salesTableRow);

  salesReportTableHead = document.createElement('th');
  newEl.className = 'firstCol';
  var newText = document.createTextNode(this.shopLoc);
  newEl.appendChild(newText);
  position = document.getElementById(this.shopLoc + ' row');
  position.appendChild(newEl);

}

  //===== Get Total Cookies Sold Per Day from All Shops =====

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

  //===== Create Table Footer =====

  var newEl = document.createElement('tfoot');
  newEl.id = 'colTotals';
  var position = document.getElementById('salesReportTable');
  position.appendChild(newEl);

  newEl = document.createElement('tr');
  newEl.id = 'colTotalsRow';
  position = document.getElementById('colTotals');
  position.appendChild(newEl);

  newEl = document.createElement('th');
  newEl.className = 'firstCol';
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

//===== Stretch Goal: Create staffReportTable Header =====


function staffReportTableHead (){
  var newEl = document.createElement('table');
  newEl.id = 'staffReportTable';
  var position = document.getElementById('tableWrap');
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
  newEl.className = 'firstCol';
  newEl.className = 'topLeft';
  var newText = document.createTextNode('Daily Staff Report');
  newEl.appendChild(newText);
  position = document.getElementById('colHeadersRowStaff');
  position.appendChild(newEl);

  for (var i = 0; i < hoursOfOperation.length; i++){
    newEl = document.createElement('th');
    newText = document.createTextNode(hoursOfOperation[i]);
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

//===== Stretch Goal: get staffTotalsPerHourAllShops =====

var staffTotalsPerHourAllShops = [];

for(i = 0; i < cookieShops.length; i++){
  for(j = 0; j < hoursOfOperation.length; j++){
    staffTotalsPerHourAllShops[j] = staffTotalsPerHourAllShops[j] + cookieShops[i].totalStaffPerHour[j];
  }
}

total = 0;
for( i in staffTotalsPerHourAllShops) {
  total += staffTotalsPerHourAllShops[i];
}

staffTotalsPerHourAllShops.push(total);

//===== Stretch Goal: Create staffReportTable Footer =====

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
  newEl.className = 'firstCol';
  var newText = document.createTextNode('Totals:');
  newEl.appendChild(newText);
  position = document.getElementById('colTotalsRowStaff');
  position.appendChild(newEl);

  for (var i = 0; i <= hoursOfOperation.length; i++){
    newEl = document.createElement('td');
    newText = document.createTextNode(staffTotalsPerHourAllShops[i]);
    newEl.appendChild(newText);
    position = document.getElementById('colTotalsRowStaff');
    position.appendChild(newEl);
  }
}

//===== Call Functions to Create Tables =====

salesReportTableHead(cookieShops);



salesReportTableFoot();

staffReportTableHead();

for(i = 0; i < cookieShops.length; i++){
  cookieShops[i].staffReportTableRows();
}

staffReportTableFoot();

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

//===== Event Handler for cookieShopCreate Form =====

function handleCookieShopCreate(event) {
  event.preventDefault();

  var form = event.target;

  var store = camelize(form.shopLoc.value);
  var shopLoc = form.shopLoc.value;
  var minCust = parseInt(form.minCust.value);
  var maxCust = parseInt(form.maxCust.value);
  var avgCookiePerCust = parseFloat(form.avgCookiePerCust.value);

  store = new CookieShop(shopLoc, minCust, maxCust, avgCookiePerCust);
  store.randomCust();
  store.cookiesPerHour();
  store.staffPerHour();

  cookieShops.push(store);

  document.getElementById('tableWrap').innerHTML = '';

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
}

//===== Event Listener for Submit cookieShopCreate Form =====

var cookieShopCreate = document.getElementById('cookieShopCreate');
cookieShopCreate.addEventListener ('submit', handleCookieShopCreate);
