"use strict";

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

var cookieShopFirstPike = {
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  totalCustEachHour: [],
  totalCookiesPerHour: [],
};

function randomCust(cookieShop) {
  for( var i = 15; i > 0; i--) {
    cookieShop.totalCustEachHour.push(Math.round(Math.random() * (cookieShop.maxCust - cookieShop.minCust)) + cookieShopFirstPike.minCust);
    console.log(cookieShop.totalCustEachHour);
  };
};

randomCust(cookieShopFirstPike);
//
// var cookieShopSeatacAirport = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookiePerCust: 1.2,
//   totalCustEachHour: [],
//   totalCookiesPerHour: [],
// };
//
// var cookieShopSeattleCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookiePerCust: 63.7,
//   totalCustEachHour: [],
//   totalCookiesPerHour: [],
// };
//
// var cookieShopCapitolHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookiePerCust: 2.3,
//   totalCustEachHour: [],
//   totalCookiesPerHour: [],
// };
//
// var cookieShopAlki = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookiePerCust: 4.6,
//   totalCustEachHour: [],
//   totalCookiesPerHour: [],
// };
//
